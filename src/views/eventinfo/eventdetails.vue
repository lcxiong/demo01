<template>
  <van-nav-bar
    title="事件详情"
    left-text=" "
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="topScroll">
    <div style="height: 1200px; text-align: center; padding-top: 10px">
      {{ eidParams }}
    </div>
  </div>
</template>

<script lang="ts">
interface stateProps {
  eidParams: string;
}

import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "eventdetails",
  setup() {
    let router = useRouter();
    let route = useRoute();
    let onClickLeft = () => {
      router.go(-1);
    };
    let state: stateProps = reactive({
      eidParams: "2020",
    });

    onMounted(() => {
      console.log(typeof route.params.eid);
      console.log(route.params);
      //state.eidParams = route.params.eid
      //Type 'string | string[]' is not assignable to type 'string'.
      //Type 'string[]' is not assignable to type 'string'
      state.eidParams = "" + route.params.eid;
    });

    return {
      onClickLeft,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #e8ebee;
}

/deep/ .van-nav-bar__title {
  color: #969696;
}

/deep/ .van-icon {
  color: #969696 !important;
}

.topScroll {
  height: calc(100vh - 48px);
  box-sizing: border-box;
  //   border: 1px solid red;
  background: #f9f9f9;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>