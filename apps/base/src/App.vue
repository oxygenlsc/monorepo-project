<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router';
import { apiGetAllFields } from './api/test';
import LayOut from './components/LayOut.vue';

</script>

<template>
    <LayOut>
    <router-view /> <!-- 外部传入router-view -->
    <div id="mainContainer" >
    </div>
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
