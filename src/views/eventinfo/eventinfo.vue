<template>
  <div @click="toDetails" style="text-align: center">详情{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
//ts 接口
interface stateProps {
  title: string;
}

export default defineComponent({
  name: "eventinfo",
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