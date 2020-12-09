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
import { defineComponent, nextTick,getCurrentInstance ,onMounted,onBeforeMount,} from "vue";

import suspenseZj from "../../components/suspenseZj.vue";

export default defineComponent({
  name: "historylist",
  components: {
    suspenseZj,
  },
  setup() {
    
    //前端总是在路上，发展真的太疯狂了，少年加油   学起来

    const cur:any = getCurrentInstance();

    onMounted(()=>{

    })

    onBeforeMount(()=>{
      console.log(cur.ctx.$filters.numFilter(6.67895))
    })
    
    nextTick(() => {});
  },
});
</script>

<style lang="scss" scoped>
// css 
</style>