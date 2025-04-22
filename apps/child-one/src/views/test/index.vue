<script setup>
import { ref, onMounted } from "vue";
import { qiankunRouter, qiankunEvent, qiankunStore } from "@lisc/utils";
import { apiGetAllFields } from "../../api/test";
import { MyButton } from "@lisc/components";
import { useCounterStore } from "@/stores/counter";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
const counterStore = useCounterStore();
const token = ref("");
const handlejump = () => {
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    qiankunRouter.push("/childTwo/test", true);
  } else {
    window.location.href = "http://localhost:5175/childTwo/test";
  }
};
const handlejumpSelf = () => {
  qiankunRouter.push({
    path: "/path-two",
    query: {
      a: 1,
      b: 2,
    },
  });
};
const handleAskFather = () => {
  qiankunEvent.emit("loading", "加载中");
};
const handleGetToken = () => {
  token.value = qiankunStore.get("token");
  console.log(qiankunStore.get("token"));
};
onMounted(() => {
  apiGetAllFields().then((res) => {
    console.log(res);
  });
});
</script>

<template>
  <div class="test-container">
    测试页面
    <span class="test-text">123</span>
    <MyButton />
    <a-button @click="counterStore.increment"
      >+1({{ counterStore.count }})</a-button
    >
    <a-button @click="handlejumpSelf" type="primary">跳转到第二子路由</a-button>
    <a-button @click="handlejump">跳转到第二子应用</a-button>
    <a-button @click="handleAskFather" type="primary"
      >主子应用通信 子应用调用主应用注册的时间</a-button
    >
    <a-button @click="handleGetToken">获取主应用给的token</a-button>
    token： {{ token }}
  </div>
</template>
<style lang="less" scoped>
.test-container {
  color: red;
  .test-text {
    color: blue;
  }
}
</style>
