
<script setup>
import { ref , onMounted} from 'vue';
import {qiankunRouter} from '@lisc/utils'
import {apiGetAllFields} from '../../api/test'
import { MyButton } from '@lisc/components'
import {
  useCounterStore
} from '@/stores/counter'
const counterStore = useCounterStore()
const handlejump = () => {
  qiankunRouter.push('/childTwo/test', true)
}
const handlejumpSelf = () => {
  qiankunRouter.push('/path-two')
}
onMounted(() => {
  apiGetAllFields().then(res => {
    console.log(res)
  })
})
</script>

<template>
    <div class="test-container">
      测试页面
      <span class="test-text">123</span>
      <MyButton/>
      <a-button @click="counterStore.increment">+1({{ counterStore.count }})</a-button>
      <a-button @click="handlejumpSelf" type="primary" >跳转到第二子路由</a-button>
      <a-button @click="handlejump" >跳转到第二子应用</a-button>

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