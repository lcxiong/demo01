<template>
  <div class="login">
    <van-nav-bar title="登录" />

    <van-form @submit="onSubmit">
      <van-field
        v-model="zh"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
        size="large"
      />
      <van-field
        v-model="mm"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        size="large"
      />
      <div style="margin: 0.4rem 1rem">
        <van-button block type="danger" size="normal" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { my } from "@/services/apis/my"; //导入请求接口的方法
import storage from "@/tool/useLocalStorage";

export default defineComponent({
  name: "login",
  setup(props, context) {
    console.log(storage);
    //路由跳转
    let router = useRouter();

    //reactive
    let state = reactive({
      zh: "gzzj", //gzzj
      mm: "123456", //123456
    });
    //方法
    let postData = () => {
      my.Login({
        Data: JSON.stringify({
          user_name: state.zh,
          password: state.mm,
          wx_linked: false,
        }),
      })
        .then((response) => {
          if (response.data.result) router.push({ name: "home" });
          if (!response.data.result) {
            alert(response.data.err);
          }

          // localStorage.setItem("session_id", response.data.session_id);
          // localStorage.setItem("user_id",response.data.user_info.user_id);
          storage.set("session_id", response.data.session_id);
          storage.set("user_id", response.data.user_info.user_id);
        })
        .catch();
    };
    let onSubmit = () => {
      postData();
    };
    //生命周期：钩子函数
    onMounted(() => {});

    // return 响应数据
    return {
      ...toRefs(state),
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #e8ebee;
}
/deep/ .van-nav-bar__title {
  color: #646566;
}

.van-button--danger {
  color: #fff;
  background-color: #05ae09;
  border: 1px solid #05ae09;
}
</style>