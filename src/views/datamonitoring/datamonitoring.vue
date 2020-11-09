<template>
  <!-- datamonitoring -->
  <div class="topScroll">
    <van-pull-refresh
      v-if="listStore.length"
      v-model="refreshing"
      @refresh="onRefresh"
      class=""
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="我是有底线的"
        @load="onLoad"
      >
        <div>
          <div class="item" v-for="(item, index) in listStore" :key="index">
            <div class="d-f">
              <span>设备位置：{{ item.location_name }}</span>
              <span>时间：{{ item.updatetime }}</span>
            </div>
            <div class="d-f">
              <span>设备名称：{{ item.dev_name }}</span
              >({{ index + 1 }})
              <!-- <span v-if="item.img_url">
                      <img :src="path + item.img_url" />
                    </span> -->
            </div>
            <div>
              <span
                >状态描述：<span class="c-05ae09">{{
                  item.status_str
                }}</span></span
              >
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <van-empty description="暂无数据" v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";

import { datamonitoring } from "@/services/apis/datamonitoring";

export default defineComponent({
  name: "datamonitoring",
  setup() {
    let state = reactive({
      params: {
        page_index: 1,
        page_rec_cnt: 10,
        road_id: [0],
        tunnel_id: [0],
        date_type: 1,
        dev_state: 0,
        start_time: "",
        end_time: "",
        time_type: 14,
      },

      listdata: [],
      listStore: [],
      refreshing: false, //是否处于加载中状态
      loading: false, //是否处于加载状态，加载过程中不触发load事件
      finished: false, //是否已加载完成，加载完成后不再触发load事件
    });

    let postData = () => {
      datamonitoring
        .getDatamonitoring(
          {
            Data: JSON.stringify(state.params),
          } //接口参数
        )
        .then((response) => {
          console.log("第", state.params.page_index, "页");

          //请求完成

          state.listdata = response.data.dev_list;
          state.loading = false;
          if (state.listdata.length == state.params.page_rec_cnt) {
            //判断是否应该加载下一页
            state.params.page_index += 1;
          } else {
            //禁用上拉加载
            state.finished = true;
          }
          if (state.listdata) {
            state.listStore.push(...state.listdata);
          }
        })
        .catch();
    };
    //下拉刷新时触发
    let onRefresh = () => {
      // 下拉刷新时会触发 refresh 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 v-model 设置为 false，表示加载完成。
      // 清空列表数据
      state.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      state.loading = true;
      state.listStore = [];
      state.params.page_index = 1;
      postData();
    };
    //滚动条与底部距离小于 offset 时触发
    let onLoad = () => {
      postData();
    };

    onMounted(() => {
      postData();
    });

    return {
      ...toRefs(state),
      onRefresh,
      onLoad,
    };
  },
});
</script>

<style lang="scss" scoped>
.topScroll {
  height: calc(100vh - 0.8rem - 52px);
  box-sizing: border-box;
  background: #f5f5f5;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.item {
  box-sizing: border-box;
  margin: 0.1rem 0;
  background-color: #fff;
  font-size: 14px;
  padding: 0.2rem 0.18rem;
  color: #333;

  img {
    width: 30px;
  }
}
.item:nth-child(2n + 1) {
  background-color: #f8f9fa;
}

.d-f {
  display: flex;
  justify-content: space-between;
}
</style>