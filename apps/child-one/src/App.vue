<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router';
import { apiGetAllFields } from './api/test';

onMounted(() => {
  const params = {
    fieldId: 807,
    startTime: '2025-04-15',
    endTime: '2025-04-15'
  }
  // apiGetAllFields().then((res) => {
  //   console.log(res)
  // })
})
</script>

<template>
  <div>
    <!-- <div class="card">
      <button @click="counterStore.increment">increment</button>
      <p>Count is: {{ counterStore.count }}</p>
    </div>
    <a-space>
       -->
    <!-- <a-button type="primary">Primary12333</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button> -->
    <!-- <a-button type="text">Text</a-button>
  </a-space> -->
  <div class="main-content">
      <RouterView />
    </div>
  </div>
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
