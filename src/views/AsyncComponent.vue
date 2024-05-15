<script setup lang="ts">
import { ref, onMounted } from 'vue'
let message = ref('Hello World!')
let isLoading = ref(true)

onMounted(async () => {
  // 模拟异步数据加载
  await new Promise((resolve) => setTimeout(resolve, 2000))
  isLoading.value = false
  message.value = 'Hello Vue 3 + Vite'
})
</script>

<template>
  <div>
    <div v-if="isLoading">loading...</div>
    <div v-else>{{ message }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
