<script setup lang="ts">
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'

// 使用 defineAsyncComponent 定义异步组件
const AsyncComponents = defineAsyncComponent(() => import('./AsyncComponent.vue'))

let loadAsync = ref(false)

let open = ref(false)
</script>

<template>
  <el-button @click="open = true">Open Modal</el-button>

  <el-button @click="loadAsync = true">点击加载异步组件</el-button>

  <!-- 异步组件 实现有问题 -->
  <Suspense v-if="loadAsync">
    <template #default>
      <AsyncComponents />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <el-button @click="open = false">Close</el-button>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  padding: 30px;
  border-radius: 8px;
  background-color: aliceblue;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}
</style>
