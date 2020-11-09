<template>
  <!-- historylist -->
  <div>
    <Suspense>
      <template #default>
        <suspenseZj />
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";

import suspenseZj from "../../components/suspenseZj.vue";

export default defineComponent({
  name: "historylist",
  components: {
    suspenseZj,
  },
  setup(props, ctx) {
    nextTick(() => {});
  },
});
</script>