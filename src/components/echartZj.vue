<template>
  <div id="chartId" class="chart"></div>

  <div id="mask" style="width: 100%; height: 100%" v-show="isFd">
    <div id="mask-header">
      <button @click="gbFunc">关闭</button>
    </div>
    <div id="mask-body"></div>
  </div>
</template>

<script lang="ts">
let colorArr = [
  "#409eff",
  "#33d57c",
  "#ff3540",
  "#e91e69",
  "#aa00ff",
  "#4527a0",
  "#1a237e",
  "#1e88e5",

  "#FFE404",
  "#006064",
  "#1de9b6",
  "#00c853",
  "#76ff03",
  "#eeff41",
  "#f57f17",
  "#ffab00",
  "#ffd180",
  "#ffab91",
  "#263238",
];
const c969696 = "#969696";
//引入 echarts
let echarts = require("echarts");

import { defineComponent, reactive, toRefs, onMounted, inject } from "vue";

export default defineComponent({
  name: "echartZj",
  props: ["chartData"],
  setup(props) {
    //inject(名称)
    const color = inject("globalColor");

    //响应数据
    let state = reactive({
      myChartData: { chart_title: "图表" },
      isFd:false
    });
    state.myChartData = props.chartData; //更新值
    //方法
    let getOption = (data: any) => {
      let option = {
        title: [
          {
            text: data.chart_title || "", //后台数据
            left: "left",
            textStyle: {
              fontSize: 12,
              color: c969696,
              fontStyle: "normal",
            },
            subtext: data.sub_title || "", //后台数据
            subTextStyle: {
              fontSize: 10,
              color: c969696,
            },
          },
        ],

        color: colorArr,

        legend: {
          show: false,
          top: 0,
          left: 8,
          textStyle: { color: c969696, fontSize: "12" },
        },

        tooltip: {
          //坐标轴指示器，坐标轴触发有效
          axisPointer: {
            type: "shadow", //默认为直线，可选为：'line' | 'shadow'
          },
          trigger: "axis", //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          // showContent:true,                           //是否显示提示框浮层
          // alwaysShowContent:true,                     //是否永远显示提示框内容
        },

        grid: {
          top: 60,
          bottom: 0,
          left: 0,
          right: 0,
          containLabel: true,
          show: false,
          borderColor: "#fff",
        },

        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              show: false,
            },
            restore: { show: false },
            dataView: { show: true, readOnly: true },
            magicType: { show: false, type: ["line", "bar"] },
            saveAsImage: { show: true },
            myTool2: {
              //注意，自定义的工具名字，只能以 my 开头，例如下例中的 myTool1，myTool2：
              show: true,
              title: "全屏显示",
              // icon: "image:./img/fullscreen.png",
              icon:
                "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",
              onclick: () => {
                console.log("怎么放大",state.isFd);
                state.isFd = true;
                fdFunc('mask-body')
                // $("#mask").css("display","block");
                // mychart_first("mask-body",data1,data2,title,barName);
                // if(maskBody){
                // 	mask=first;
                // }
              },
            },
          },
        },

        xAxis: {
          type: "category",
          data: data.xaxis_data,
          splitLine: { show: false, lineStyle: { color: c969696 } },
          axisLine: { lineStyle: { color: c969696 } },
          axisLabel: { color: c969696, rotate: 30 },
          axisTick: { show: true },
        },

        yAxis: (() => {
          let list = [];
          if (data.left_yaxis) {
            list.push({
              name: data.left_yaxis.name,
              type: "value", // data.left_yaxis.type,
              labelformat: data.left_yaxis.labelformat,
              splitLine: { show: false, lineStyle: { color: c969696 } },
              axisLine: { lineStyle: { color: c969696 } },
              axisLabel: { color: c969696 },
              axisTick: { show: true },
            });
          }
          if (data.right_yaxis) {
            list.push({
              name: data.right_yaxis.name,
              type: data.right_yaxis.type, // ,
              labelformat: data.right_yaxis.labelformat,
              splitLine: { show: false, lineStyle: { color: c969696 } },
              axisLine: { lineStyle: { color: c969696 } },
              axisLabel: { color: c969696 },
              axisTick: { show: true },
            });
          }
          return list;
        })(),

        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: Math.floor(100 / (data.xaxis_data.length / 6)),

            zoomLock: true,
            filterMode: "nona",
          },
        ],

        series: (() => {
          if (data.series_data_list) {
            data.series_data_list.forEach((v: any) => {
              v.areaStyle = { opacity: 0.1 };
              v.smooth = true;
              v.data.map((item: any, index: number) => {
                // v.data[index] = +item.toFixed(2);
                let rep = /[\.]/;
                if (rep.test(item)) {
                  v.data[index] = +item.toFixed(2);
                } else {
                  v.data[index] = item;
                }
              });
            });
          }
          return data.series_data_list;
        })(),
      };
      return option;
    };
    let init = () => {
      let chart = echarts.init(document.getElementById("chartId"));
      let chartDataParams = state.myChartData; //数据
      if (chartDataParams) {
        chart.setOption(getOption(chartDataParams)); //
      }
      return chart;
    };
    //关闭
    let gbFunc = ()=>{
      state.isFd = false;
    };
    //放大
    let fdFunc = (id:string)=>{
      console.log(id)
      let chart = echarts.init(document.getElementById(id));
      let chartDataParams = state.myChartData; //数据
      if (chartDataParams) {
        chart.setOption(getOption(chartDataParams)); //
      }
      return chart;
    };

    //生命周期 钩子函数
    onMounted(() => {
      init();
    });
    //返回页面响应数据
    return {
      ...toRefs(state),
      gbFunc,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  height: 100%;
  padding: 0.35rem 0.2rem 1rem;
  box-sizing: border-box;
}

// body,
// div,
// p,
// a {
//   margin: 0;
//   padding: 0;
// }
// body,
// html,
// #box {
//   width: 100%;
//   height: 100%;
//   background: #ccc;
//   border: 1px solid red;
//   box-sizing: border-box;
// }


#mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  // display: none;
  z-index: 9999999;
  background: rgba(0,0,0,0.5);
  box-sizing: border-box;
}
#mask-body {
  position: absolute;
  top: 100px;
  left: 50px;
  width: 80vw;
  height: 70vh;
  border: 1px solid black;
  background: white !important;
  opacity: 1;
  z-index: 99;
  padding: 50px;
}
#mask-header {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 80vw;
  height: 50px;
  border: 1px solid black;
  background: white !important;
  opacity: 1;
  z-index: 999;
  padding: 0 50px;
}
#mask-header > button {
  padding: 3px 10px;
  border: 1px solid #ccc;
  position: absolute;
  font-size: 12px;
  right: 15px;
  top: 10px;
  cursor: pointer;
}
#mask-header > button:hover {
  background: #ccc;
  border: 1px solid none;
}
</style>