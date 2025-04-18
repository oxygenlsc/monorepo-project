<template>
  <div>
    <div>
      这个上buttons
      <a-button type="primary" @click="feature = 'primary'">jjjjj</a-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const feature = ref();
</script>
