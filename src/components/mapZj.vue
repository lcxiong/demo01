<template>
  <div id="container"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
//***
declare let AMap: any;

export default defineComponent({
  name: "mapZj",

  props: {
    mapData: Object,
  },

  setup(props, c) {
    let state: {
      zoom: number;
      center: any;
      markers: any;
      polyline: any;
    } = reactive({
      zoom: 9,
      center: [],
      markers: [],
      polyline: [],
    });

    // initGIS
    let initGIS = (data: any): void => {
      //any
      let path = [];
      state.zoom = data.basic_info.zoom_level; //*
      state.center = [data.basic_info.center_lon, data.basic_info.center_lat]; //*
      let markers: any = [];
      data.infrast_list.forEach((v: any, i: number) => {
        markers.push({
          position: [v.infrast_lon, v.infrast_lat],
          content: `<div class="marker">${v.infrast_name}</div>`,
          extData: v,
          offset: new AMap.Pixel(-16, -37),
        });
      });
      path.push([
        data.unit_region_info[0].road_region_info[0].start_lon,
        data.unit_region_info[0].road_region_info[0].start_lat,
      ]);
      data.unit_region_info[0].road_region_info.forEach((v: any, i: number) => {
        path.push([v.end_lon, v.end_lat]);
      });
      state.markers = markers; //*
      state.polyline = path; //*
    };
    // initMap
    let initMap = (): void => {
      let map = new AMap.Map("container", {
        zoom: state.zoom,
        center: state.center,
        resizeEnable: true,

        rotateEnable: true,
        pitchEnable: true,
        pitch: 60,
        rotation: -30,
        viewMode: "3D", //开启3D视图,默认为关闭
        buildingAnimation: true, //楼块出现是否带动画
        expandZoomRange: true,
      });
      let scale = new AMap.Scale({});
      let toolBar = new AMap.ToolBar({});
      let overView = new AMap.OverView({});
      map.addControl(scale);
      map.addControl(toolBar);
      map.addControl(overView);
      new AMap.Polygon({
        map: map,
        path: state.polyline,
        strokeColor: "#09193a",
        fillColor: "#09193a",
      });
      state.markers.forEach((v: any) => {
        let marker = new AMap.Marker(v);
        marker.on("click", function () {});
        map.add(marker);
      });
    };

    onMounted(() => {
      initGIS(props.mapData);
      initMap();
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  margin: 10px auto;
}
</style>