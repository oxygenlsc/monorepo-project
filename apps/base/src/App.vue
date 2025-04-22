<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { qiankunEvent, qiankunStore } from "@lisc/utils";
// import { apiGetAllFields } from "./api/test";
import LayOut from "./components/LayOut.vue";
function login() {
  setTimeout(() => {
    // 登录成功，储存token
    qiankunStore.set("token", Math.random(1, 10).toString());
    alert("登录成功模拟");
    // 跳转去访问子应用
  }, 1000);
}
onMounted(() => {
  // 订阅loading事件
  qiankunEvent.on("loading", (name, args) => {
    console.log(name, args, "123");
    alert("触发事件：" + name + "，参数：" + args);
  });
  login();
});
</script>

<template>
  <LayOut>
    <router-view />
    <!-- 外部传入router-view -->
    <div id="mainContainer">{{ fff }}ddd</div>
  </LayOut>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
