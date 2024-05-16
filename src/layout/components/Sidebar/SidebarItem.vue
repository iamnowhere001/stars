<script setup lang="ts">
import { computed } from 'vue'
import { type RouteRecordRaw } from 'vue-router'

interface Props {
  item: RouteRecordRaw
  basePath?: string
}

const props = withDefaults(defineProps<Props>(), {
  basePath: ''
})

/** 显示的子菜单 */
const showingChildren = computed(() => {
  return props.item.children?.filter((child) => !child.meta?.hidden) ?? []
})
</script>

<template>
  <el-sub-menu :index="props.item.path" teleported>
    <template #title>
      <span v-if="props.item.meta?.title">{{ props.item.meta.title }}</span>
    </template>
    <template v-if="props.item.children">
      <SidebarItem
        v-for="child in showingChildren"
        :key="child.path"
        :item="child"
        :base-path="child.path"
      />
    </template>
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>
