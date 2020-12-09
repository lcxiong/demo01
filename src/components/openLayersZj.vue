<template>
  <div>
    <div id="map" class="map">
      <!-- Popup -->
      <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 在 index.html引入 ol.js  ol.css
 * 自定义弹窗Popup样式
 */
import { gis_road_info } from "./openLayersZj.js";

export default {
  name: "openLayersZj",
  data() {
    return {
      map: null,
    };
  },
  created() {
    //infrast_list
    //数据转换:新增[] key
    var infrast_data = gis_road_info.infrast_list; //获取坐标
    this.new_infrast_data = [];
    for (let i = 0; i < infrast_data.length; i++) {
      this.new_infrast_data[i] = infrast_data[i];
      infrast_data[i].ol = []; //***[]***
      infrast_data[i].ol[0] = parseFloat(infrast_data[i].lon);
      infrast_data[i].ol[1] = parseFloat(infrast_data[i].lat);
      infrast_data[i].key = i; //***key***
    } 
    //隧道 点数据
    //road_region_list 区域
    let coordinates = [];
    gis_road_info.road_region_list.forEach((item) => {
      coordinates.push([item.start_lon, item.start_lat]);
    });
    //声明一个新的数组
    this.coordinatesPolygon = new Array();
    //循环遍历将经纬度转到"EPSG:4326"投影坐标系下[ 经纬度 ]
    for (var i = 0; i < coordinates.length; i++) {
      var pointTransform = ol.proj.fromLonLat(
        [coordinates[i][0], coordinates[i][1]],
        "EPSG:4326"
      );
      this.coordinatesPolygon.push(pointTransform); //push
    } 
    //区域和线数据
  },
  mounted() {
    this.initMap();
    // click
    this.map.on("click", (evt) => {
      var feature = this.map.forEachFeatureAtPixel(evt.pixel, function (
        feature
      ) {
        return feature;
      });
      if (feature) {
        //这里说明我们点击的是点标记，
        //清空popup的内容容器
        this.content.innerHTML = "";
        //在popup中加载当前要素的具体信息
        this.addFeatrueInfo(this.new_infrast_data[feature.values_.key]);
        //设置popup的位置
        this.popup.setPosition(
          ol.proj.fromLonLat(
            this.new_infrast_data[feature.values_.key].ol,
            "EPSG:4326"
          )
        );
      }
    });
    /**
     * 为map添加鼠标移动事件监听，当指向标注时改变鼠标光标状态
     */
    this.map.on("pointermove", (e) => {
      var pixel = this.map.getEventPixel(e.originalEvent);
      var hit = this.map.hasFeatureAtPixel(pixel);
      this.map.getTargetElement().style.cursor = hit ? "pointer" : "";
    });
  },
  methods: {
    initMap() {
      //实例化Map对象加载地图
      //设置地图中心
      var center = ol.proj.fromLonLat([114.271744, 23.7681751], "EPSG:4326");
      //地图拖拽经纬度
      var maxExtent = ol.extent.boundingExtent([[114.206867,24.05976],[114.196468,23.082754]]);
      //创建地图
      this.map = new ol.Map({
        view: new ol.View({
          center: center, //设置地图中心
          minZoom: 9, //设置缩放的最大和最小级别
          maxZoom: 12, //13
          zoom: 10, //设置默认加载的级别
          projection: "EPSG:4326", //坐标系类型
          extent: maxExtent
        }),
        target: "map", //要显示地图的DIV的id属性
        layers: [],
      });

      //添加一个使用 瓦片地图的层 离线地图
      var offLineMap = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: "http://192.168.50.105:8901/tiles/{z}/{x}/{y}.png",
        }),
        // source: new ol.source.OSM(),
      });
      this.map.addLayer(offLineMap);

      //line
      var lineFeature = new ol.Feature({
        geometry: new ol.geom.LineString([...this.coordinatesPolygon]),
      });
      var lineStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "#33d57c",
          width: 4,
        }),
      });
      lineFeature.setStyle(lineStyle);
      var lineLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [lineFeature],
        }),
        zIndex: 1, //
      });
      this.map.addLayer(lineLayer);

      //polygon
      var polygonFeature = new ol.Feature({
        geometry: new ol.geom.Polygon([this.coordinatesPolygon]),
      });

      var polygonLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [polygonFeature],
        }),
        style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: "rgba(43,72,152, 0.9)",
          }),
          stroke: new ol.style.Stroke({
            color: "rgb(43,72,152)",
            width: 2,
          }),
        }),
        zIndex: 1,
      });

      this.map.addLayer(polygonLayer);

      //遍历标点
      for (let i = 0; i < this.new_infrast_data.length; i++) {
        this.showDian(this.new_infrast_data[i]);
      }
      /**
       * 实现popup的html元素
       */
      var container = document.getElementById("popup");
      this.content = document.getElementById("popup-content");
      var closer = document.getElementById("popup-closer");

      /**
       * 3、在地图容器中创建一个Overlay
       */
      this.popup = new ol.Overlay({
        //要转换成overlay的HTML元素
        element: container,
        //当前窗口可见
        autoPan: true,
        //Popup放置的位置
        positioning: "bottom-center",
        //是否应该停止事件传播到地图窗口
        stopEvent: false,
        autoPanAnimation: {
          //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度
          duration: 250,
        },
      });
      this.map.addOverlay(this.popup);

      /**
       * 添加关闭按钮的单击事件（隐藏弹窗）
       */
      closer.onclick = () => {
        //未定义popup位置
        this.popup.setPosition(undefined);
        //失去焦点
        closer.blur();
        return false;
      };
    },
    //标点渲染【函数】
    showDian(info) {
      //实例化Vector要素，通过矢量图层添加到地图容器中
      let iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(info.ol, "EPSG:4326")),
        //名称属性
        name: info.infrast_name,
        infrast_pic_url: info.infrast_pic_url,
        //自定义数据，作用:唯一标识符
        key: info.key,
      });
      iconFeature.setStyle(this.createLabelStyle(iconFeature)); //调用标注样式【函数】
      //矢量标注的数据源
      let vectorSource = new ol.source.Vector({
        features: [iconFeature],
      });
      //矢量标注图层
      let vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        zIndex: 2,
      });
      this.map.addLayer(vectorLayer);
      //实例化Vector要素，通过矢量图层添加到地图容器中 end
    },
    //创建标注样函数
    createLabelStyle(feature) {
      return new ol.style.Style({
        image: new ol.style.Icon({
          //设置图标点
          // anchor: [0.5, 60],
          anchor: [0, 0],
          //图标起点
          anchorOrigin: "top-right",
          //指定x值为图标点的x值
          anchorXUnits: "fraction",
          //指定Y值为像素的值
          anchorYUnits: "pixels",
          //偏移
          offsetOrigin: "top-right",
          // offset:[0,10],
          //图标缩放比例
          // scale:0.5,
          //透明度
          opacity: 0,
          //图标的url
          // src: 'https://idos.yuxianginfo.net/Content/img/map/shouf.png'
          src: "https://idos.yuxianginfo.net" + feature.values_.infrast_pic_url,
        }),
        text: new ol.style.Text({
          //位置
          textAlign: "center",
          //基准线
          textBaseline: "center",
          //文字样式
          font: "normal 14px 微软雅黑",
          //文本内容
          text: feature.get("name"),
          //文本填充样式（即文字颜色）
          fill: new ol.style.Fill({ color: "#FFF" }),
          // stroke: new ol.style.Stroke({ color: '#FFF', width: 0 }),
          backgroundStroke: new ol.style.Stroke({
            // color: "#8FAADC",
            color: "#05ae09",
            width: 10,
          }),
          //标签的背景填充
          backgroundFill: new ol.style.Fill({
            // color: "#8FAADC",
            color: "#05ae09",
            width: 10,
          }),
        }),
      });
    },
    //动态创建弹窗的具体内容
    addFeatrueInfo(info) {
      console.log(info);
      //创建a元素
      var elementA = document.createElement("a");
      elementA.className = "markerInfo";
      elementA.textContent = info.win_title;
      this.content.appendChild(elementA);
      //创建div
      var elementDiv = document.createElement("div");
      elementDiv.className = "markerText";
      elementDiv.innerHTML = info.win_content;
      this.content.appendChild(elementDiv);
      //创建video
      var elementVideo = document.createElement("video");
      elementVideo.className = "markerVideo";
      elementVideo.style = "width:100%;";
      elementVideo.controls = "controls";
      // elementVideo.autoplay = "true";
      elementVideo.src = ""; //https://www.runoob.com/try/demo_source/mov_bbb.mp4

      if (Hls.isSupported()) {
  
        //需引入hls.js
        var hls = null;
        hls = new Hls();
        // hls.loadSource(info.win_video_url);//https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8
        hls.loadSource(
          "https://vod.gdtv.cn/m3u8/202011/160536283327.m3u8"
        );
        hls.attachMedia(elementVideo);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("加载成功");
          elementVideo.play();
        });
        hls.on(Hls.Events.ERROR, (event, data) => {
          console.log(event, data);
          // 监听出错事件
          console.log("加载失败");
        });
      } else if (elementVideo.canPlayType("application/vnd.apple.mpegurl")) {
        elementVideo.src =
          "https://vod.gdtv.cn/m3u8/202011/160536283327.m3u8";
        elementVideo.addEventListener("loadedmetadata", () => {
          elementVideo.play();
        });
      }

      this.content.appendChild(elementVideo);
    },
  },
};
</script>

<style scoped>
.map {
  /* width: 530px; */
  width: 98vw;
  height: 630px;
  margin: 4px auto;
  box-sizing: border-box;
}
</style>