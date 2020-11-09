<template>
  <!-- Suspense -->
  <div>
    {{ result }}
    <div>
      {{ list }}
    </div>
    <div>{{$filters.numFilter(3.78546)}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "suspenseZj",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({ result: "Suspense 组件", list: [1, 2, 3] });
      }, 1000);
    });

    // Suspense组件
    // default代表异步请求完成后，显示的模板内容。fallback代表在加载中时，显示的模板内容。
    // 注意:如果使用Suspense的话，要返回一个promise对象，而不是原来的那种JSON对象
  },
});
</script>