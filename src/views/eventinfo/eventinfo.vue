<template>
  <div @click="toDetails" style="text-align: center">详情{{ title }}</div>
  
  <Suspense>
      <template #default>
        <suspenseZj2 />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import suspenseZj2 from "../../components/suspenseZj2.vue"
//ts 接口
interface stateProps {
  title: string;
}

export default defineComponent({
  name: "eventinfo",
  components:{suspenseZj2},
  setup() {
    let state: stateProps = reactive({
      title: "eventinfo",
    });

    let router = useRouter();

    let toDetails = () => {
      router.push({
        name: "eventdetails",
        
        params: {
          eid: "20201106",
        },
      });
    };

    return {
      ...toRefs(state),
      toDetails,
    };
  },
});
</script>