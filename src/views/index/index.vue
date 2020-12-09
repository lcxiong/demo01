<template>
  <div class="echart">
    <echartZj :chartData="e_data" />
  </div>
  <div class="map" v-show="false">
    <mapZj :mapData="map_data" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted,} from "vue";

import { chart, gis_info } from "@/tool/testData";
import echartZj from "../../components/echartZj.vue";
import mapZj from "../../components/mapZj.vue";
export default defineComponent({
  name: "home",
  //注册组件
  components: {
    echartZj,
    mapZj,
  },
  setup() {
    let e_data = ref({});
    e_data.value = chart; //***

    let map_data = ref({});
    map_data.value = gis_info; //***

    onMounted(() => {
      // e_data.value = chart;//onMounted 子组件优先执行
      // console.log(e_data.value);
    });

    return {
      e_data,
      map_data,
    };
  },
});
</script>

<style lang="scss" scoped>
.echart {
  width: 100%;
  height: 7rem;
  box-sizing: border-box;
}
</style>