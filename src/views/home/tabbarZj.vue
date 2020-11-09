<template>
  <!-- tabbarZj -->
  <van-tabbar route active-color="#05ae09" inactive-color="#969696">
    <van-tabbar-item
      v-for="(item, index) in tabbar_list"
      :key="index"
      replace
      :to="item.url"
      :icon="item.icon"
    >
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "tabbarZj",
  setup() {
    let tabbar_list = ref([
      {
        name: "主页",
        url: "/index",
        icon: "column",
      },
      {
        name: "数据监测",
        url: "/datamonitoring",
        icon: "todo-list",
      },
      {
        name: "事件信息",
        url: "/eventinfo",
        icon: "info",
      },
      {
        name: "历史记录",
        url: "/historylist",
        icon: "graphic",
      },
      {
        name: "我的",
        url: "/my",
        icon: "manager",
      },
    ]);

    return {
      tabbar_list,
    };
  },
});
</script>

<style lang="scss" scoped>
.van-tabbar {
  background-color: #e8ebee;
}
.van-tabbar-item--active {
  background-color: #e8ebee;
}
</style>