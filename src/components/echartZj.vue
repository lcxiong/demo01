<template>
  <div id="chartId" class="chart"></div>
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

import { defineComponent, reactive, toRefs, onMounted } from "vue";

export default defineComponent({
  name: "echartZj",
  props: ["chartData"],
  setup(props) {
    //响应数据
    let state = reactive({
      myChartData: { chart_title: "图表" },
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
          show: true,
          top: 0,
          right: 8,
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
    //生命周期 钩子函数
    onMounted(() => {
      init();
    });
    //返回页面响应数据
    return {
      ...toRefs(state),
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
</style>