<template>
  <!--使用组件 面包屑 组件 -->
  <div>
    <breadcrumbZj />
  </div>
  <!-- 子路由窗口 -->
  <div class="home topScroll">
    <router-view name="mainView" />
  </div>
  <!-- 使用组件 底部tabbar -->
  <div>
    <tabbarZj />
  </div>
</template>

<script lang="ts">
import { defineComponent,provide } from "vue";
//导入自定义 组件
import breadcrumbZj from "./breadcrumbZj.vue";
import tabbarZj from "./tabbarZj.vue";
export default defineComponent({
  name: "home",
  //注册组件
  components: {
    breadcrumbZj,
    tabbarZj,
  },
  setup() {
    //provide(名称,数据)
    provide('globalColor','red')
  },
});
</script>

<style lang="scss" scoped>
.topScroll {
  height: calc(100vh - 0.8rem - 52px);
  box-sizing: border-box;
  background: #f5f5f5;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>