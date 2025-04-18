
<script setup>
import { ref } from 'vue';
import { MyButton } from '@lisc/components'
import {
  useCounterStore
} from '@/stores/counter'
const counterStore = useCounterStore()
const feature = ref();
</script>

<template>
    <div class="test-container">
      test
      <span class="test-text">123</span>
      <MyButton/>
      <a-button @click="counterStore.increment">+1({{ counterStore.count }})</a-button>
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