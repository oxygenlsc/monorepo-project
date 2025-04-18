
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
      测试页面 这个是第二个路由
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