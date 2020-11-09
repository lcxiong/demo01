<template>
  <!-- Breadcrumb -->
  <div class="breadcrumb">
    <span v-for="(item, index) in list" :key="index">
      <!-- <van-tag color="#05ae09"></van-tag> -->
      {{ item.meta.title }}<span v-if="index < list.length - 1"> / </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "breadcrumbZj",
  setup() {
    //路由参数
    let route = useRoute();
    //声明数据
    //ts 类型注解
    let state: any = reactive({
      list: [],
    });

    state.list = route.matched;
    //监听
    watch(route, (newV, oldV) => {
      // console.log('新',newV.matched)
      // console.log('老',oldV.matched)
      state.list = newV.matched;
    });
    //return 响应数据
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.breadcrumb {
  box-sizing: border-box;
  background-color: #05ae09;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.2rem;
  color: #fff;
}
</style>