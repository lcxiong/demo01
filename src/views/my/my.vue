<template>
  <div style="margin: 0.4rem 1rem">
    <van-button block type="danger" size="normal" @click="signOut">
      退出
    </van-button>
    <teleportZj @jiantingFunc="jiantingFunc" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import teleportZj from "@/components/teleportZj.vue"; //自定义组件
import storage from "@/tool/useLocalStorage";

import { a } from "@/tool/testData"; //测试数据
export default defineComponent({
  name: "my",
  //注册组件
  components: {
    teleportZj,
  },
  setup() {
    // alert(a)
    //路由
    let router = useRouter();
    //vuex
    let store = useStore();
    //方法
    let signOut = () => {
      storage.remove("user_id");
      storage.remove("session_id");
      router.push({ name: "login" });
    };
    //监听子组件jiantingFunc方法
    let jiantingFunc = (data: object) => {
      console.log(data);
    };
    // return 页面响应数据
    return {
      signOut,
      jiantingFunc,
    };
  },
});
</script>