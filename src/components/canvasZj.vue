<template>
  <div>
    <div :style="mStyle" class="canvasBox" id="canvasBox"></div>
    <div id="tipBox"></div>
  </div>
</template>

<script>
export default {
  name: "canvasZj",
  data() {
    return {
      mapUrl: null,
    };
  },
  props: {
    title: String,
    mStyle: String,
    mapData: Object,
    mWidth: Number,
    mHeight: Number,
  },
  mounted() {
    this.changeData();

    this.init();

    let road = "";
    this.mapData.infrast_list.forEach((item, index) => {
      road = item.line.find((v, i) => {
        return v.infrast_name === this.title;
      });
    });
    if (road) {
      this.selectRoad(road);
    }
  },
  methods: {
    init() {
      let canvasBox = document.getElementById("canvasBox"); //获取id='canvasBox'的div
      let canvas = document.createElement("canvas"); //创建canvas
      canvas.height = this.mapData.default_bg_height; //canvas的高度
      canvas.width = this.mapData.default_bg_width; //canvas的宽度
      let ctx = canvas.getContext("2d"); //canvas上下文

      //主控中心 圆形
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#ff0";
      ctx.fillStyle = "#fff";
      ctx.arc(
        this.mapData.center_pos_x,
        this.mapData.center_pos_y,
        10,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.stroke();

      //主控中心 文案
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#fff";
      ctx.font = "14px 微软雅黑";
      ctx.strokeText(
        "主控中心",
        this.mapData.center_pos_x + 15,
        this.mapData.center_pos_y + 6
      );
      ctx.stroke();

      //1、线
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#fff";
      this.mapData.infrast_list.forEach((item) => {
        ctx.moveTo(this.mapData.center_pos_x, this.mapData.center_pos_y);
        item.line.forEach((v, i, o) => {
          ctx.lineTo(v.infrast_pos_x, v.infrast_pos_y);
        });
      });
      ctx.stroke();

      this.mapData.infrast_list.forEach((item) => {
        item.line.forEach((v) => {
          //2、圆形
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#d50000";
          ctx.fillStyle = "white";
          ctx.arc(v.infrast_pos_x, v.infrast_pos_y, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();

          //3、文案
          ctx.beginPath();
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#fff";
          ctx.font = "14px 微软雅黑";
          ctx.strokeText(
            v.infrast_name,
            v.infrast_pos_x + 9,
            v.infrast_pos_y - 10
          );
          ctx.stroke();
        });
      });

      this.mapUrl = canvas.toDataURL(); //返回值是一个数据url，是base64组成的图片的源数据、可以直接赋值给图片的src属性
      canvasBox.appendChild(canvas); //向节点添加最后一个子节点

      $(canvas).click(this.onCilck);

      this.canvas = canvas;
    },
    changeData() {
      let data = this.mapData;
      let rw = this.mWidth / data.default_bg_width;
      let rh = this.mHeight / data.default_bg_height;
      data.default_bg_width = this.mWidth;
      data.default_bg_height = this.mHeight;
      data.infrast_list.forEach((item) => {
        item.line.forEach((v) => {
          v.infrast_pos_x *= rw;
          v.infrast_pos_y *= rh;
        });
      });
    },
    onCilck(e) {
      console.log("[] canvas ->->");
      let y = e.originalEvent.layerY;
      let x = e.originalEvent.layerX;
      let data = null;
      this.mapData.infrast_list.forEach((item) => {
        item.line.map((v) => {
          if (x < v.infrast_pos_x + 10 && x > v.infrast_pos_x - 10) {
            if (y < v.infrast_pos_y + 10 && y > v.infrast_pos_y - 10) {
              data = v;
            }
          }

          if(x < this.mapData.center_pos_x + 10 && x > this.mapData.center_pos_x - 10){
              if(y < this.mapData.center_pos_y + 10 && y > this.mapData.center_pos_y - 10){
                  data={
                      infrast_name:'主控中心',
                  }
                  this.createPopup(data,e)
              }
          }

        });
      });
      if (data) {
        document.getElementById("tipBox").innerHTML = "";
        this.$emit("updateFunc", {
          id: data.infrast_id,
          type: data.infrast_type_id,
          name: data.infrast_name,
        });
        this.selectRoad(data);
        console.log("屏幕宽度：", document.body.clientWidth - e.pageX);
        this.createPopup(data,e);
      } else {
        document.getElementById("tipBox").innerHTML = ""; //清空
      }
    },
    selectRoad(v) {
      let ctx = this.canvas.getContext("2d");
      let img = new Image();
      img.src = this.mapUrl;
      ctx.drawImage(img, 0, 0);
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#05ae09";
      ctx.fillStyle = "#fff";
      ctx.arc(v.infrast_pos_x, v.infrast_pos_y, 8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#05ae09";
      //   ctx.fillStyle = "#05ae09";
      ctx.font = "14px 微软雅黑";
      //   ctx.strokeText(v.infrast_name, v.infrast_pos_x + 15, v.infrast_pos_y + 4);
      ctx.strokeText(v.infrast_name, v.infrast_pos_x + 9, v.infrast_pos_y - 10);
      ctx.stroke();
      //
    },
    createPopup(data,e){
        let divEle = document.createElement("div");
        divEle.innerText = data.infrast_name;
        divEle.className = "tipBox";
        divEle.style =
          "top:" +
          (e.pageY - 110) +
          "px;" +
          "right:" +
          (document.body.clientWidth - e.pageX - 110) +
          "px";

        document.getElementById("tipBox").appendChild(divEle);
    },
  },
};
</script>

<style scoped>

.canvasBox {
  box-sizing: border-box;
  overflow: hidden;
}
canvas {
  background: #09193a;
  margin: 0 auto;
}

/*位置弹出窗口*/
.tipBox {
  box-sizing: border-box;
  color: #000;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 220px;
  height: 80px;
  background-color: #fff;
  border-radius: 4px;
  padding: 4px;
  box-shadow: 0 0 10px #05ae09;
  font-size: 14px;
  text-align: center;
}
/*弹出窗口下箭头*/
.tipBox:after {
  display: block;
  content: "";
  border-width: 15px 30px 40px 10px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;

  /* 定位 */
  position: absolute;
  left: 49%;
  top: 100%;
}

</style>