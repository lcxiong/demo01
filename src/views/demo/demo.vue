<template>
  <!-- <openLayersZj /> -->
  <!-- <gaodeZj /> -->
  <!-- <canvasZj
    :title="title"
    :mWidth="screenWidth"
    :mHeight="screeHeight"
    :mapData="simulate_road_info"
    mStyle="cursor:pointer;"
  /> -->
  <!-- <jcanvasZj /> -->
  <!-- <threeZj /> -->
  <threeZj2 />
  <!-- <wangEditorZj /> -->
  <!-- <swiperZj /> -->
</template>

<script>
// openLayersZj
import openLayersZj from "../../components/openLayersZj.vue";
// gaodeZj
import gaodeZj from "../../components/gaodeZj.vue";
// canvasZj
import canvasZj from "../../components/canvasZj.vue";
// jcanvasZj
import jcanvasZj from "../../components/jcanvasZj.vue";
// threeZj
import threeZj from "../../components/threeZj.vue";
//threeZj2
import threeZj2 from "../../components/threeZj2.vue";
//wangEditorZj
import wangEditorZj from "../../components/wangEditorZj.vue";
//swiperZj
import swiperZj from "../../components/swiperZj.vue";
import axios from "axios";
export default {
  name: "demo",
  data() {
    return {
      title: "中", //新博高速
      // screenWidth: document.body.clientWidth, // 屏幕宽
      screenWidth: 780, // 屏幕宽
      // screeHeight: document.body.clientHeight, // 屏幕高
      screeHeight: 400, // 屏幕高
      simulate_road_info: {
        map_id: 101001,
        default_bg_width: 360,
        default_bg_height: 300,
        center_pos_x: 50,
        center_pos_y: 330,
        infrast_list: [
          {
            line: [
              {
                infrast_id: 10101,
                infrast_type_id: 1,
                infrast_name: "坐标1",
                infrast_pos_x: 90,
                infrast_pos_y: 100,
              },
              {
                infrast_id: 101,
                infrast_type_id: 0,
                infrast_name: "坐标",
                infrast_pos_x: 130,
                infrast_pos_y: 100,
              },
              {
                infrast_id: 10102,
                infrast_type_id: 1,
                infrast_name: "坐标2",
                infrast_pos_x: 200,
                infrast_pos_y: 100,
              },
              {
                infrast_id: 10103,
                infrast_type_id: 1,
                infrast_name: "坐标3",
                infrast_pos_x: 250,
                infrast_pos_y: 100,
              },
            ],
          },
          {
            line: [
              {
                infrast_id: 20101,
                infrast_type_id: 1,
                infrast_name: "二坐标1",
                infrast_pos_x: 70,
                infrast_pos_y: 200,
              },
              {
                infrast_id: 201,
                infrast_type_id: 0,
                infrast_name: "二坐标",
                infrast_pos_x: 100,
                infrast_pos_y: 200,
              },
              {
                infrast_id: 20102,
                infrast_type_id: 1,
                infrast_name: "二坐标2",
                infrast_pos_x: 160,
                infrast_pos_y: 200,
              },
              {
                infrast_id: 20103,
                infrast_type_id: 1,
                infrast_name: "二坐标3",
                infrast_pos_x: 230,
                infrast_pos_y: 200,
              },
            ],
          },
        ],
      },

      isClear: false,
      detail:""
    };
  },
  components: { openLayersZj, gaodeZj, canvasZj, jcanvasZj, threeZj, threeZj2 ,wangEditorZj,swiperZj},
  created() {
    axios
      .get("http://192.168.50.103:8901/3d/cft/cft.obj")
      // .get("3d/cft/cft.obj")
      .then((response) => {
        //
      })
      .catch((error) => {});
  },
  methods: {
  change(val) {
      console.log(val)
      
    },
 }
};
</script>

<style>
</style>