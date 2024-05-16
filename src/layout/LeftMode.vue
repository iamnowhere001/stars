<script setup lang="ts">
// import { computed } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
</script>

<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <Sidebar class="sidebar-container" />
    <!-- 页面主体内容 -->
    <AppMain class="app-main" />
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.sidebar-container {
  width: 220px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.app-main {
  height: 100vh;
  overflow: auto;
}
</style>
