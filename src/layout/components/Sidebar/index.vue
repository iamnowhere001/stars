<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
import { constantRoutes, dynamicRoutes } from '@/router'

const activeMenu = computed(() => {
  const {
    meta: { activeMenu },
    path
  } = route
  return activeMenu ? activeMenu : path
})
const noHiddenRoutes = [...constantRoutes, ...dynamicRoutes]

const route = useRoute()
</script>

<template>
  <el-menu
    :default-active="activeMenu"
    :collapse="false"
    :unique-opened="true"
    :collapse-transition="false"
    mode="vertical"
  >
    <SidebarItem
      v-for="route in noHiddenRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>

<style scoped>
.sidebar-container {
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  overflow: auto;
}
</style>
