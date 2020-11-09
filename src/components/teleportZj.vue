<template>
  <teleport to="#modal">
    <div class="center" @click="clickFunc">teleportZj</div>
  </teleport>
  <!-- 
        Teleport组件
        Teleport 大部分都翻译成了瞬间移动组件，个人觉得不太好理解。我把这个函数叫独立组件，
        它可以把你写的组件挂载到任何你想挂载的DOM上，所以说是很自由很独立的

        编写的组件用<teleport>标签进行包裹，在组件上有一个to属性，这个就是要写你需要渲染的DOMID
     -->
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "teleportZj",
  emits: ["jiantingFunc"],
  setup(props, ctx) {
    // console.log(props)
    // console.log(ctx)
    let clickFunc = () => {
      console.log("clickFunc");
      ctx.emit("jiantingFunc", { data: "jiantingFunc--->" });
    };
    return {
      clickFunc,
    };
  },
});
</script>

<style lang="scss" scoped>
.center {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border: 1px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -1rem;
  margin-top: -1rem;
  font-size: 0.3rem;
  border-radius: 1px;
}
</style>