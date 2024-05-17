<script setup lang="ts">
/**
 * 引入vue的计算属性和类型定义
 */
import { computed } from 'vue'

/**
 * 定义组件接收的props类型
 * @property {string} prefix - 图标前缀，默认为'icon'
 * @property {string} name - 图标的名称
 */
interface Props {
  prefix?: string
  name: string
}

/**
 * 使用withDefaults函数和Props类型定义组件的props，并设置默认值
 * @property {string} prefix - 默认图标前缀为'icon'
 */
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon'
})

/**
 * 计算属性：根据传入的前缀和图标名生成符号的id
 * @returns {string} 返回图标的符号id，格式为"#前缀-图标名"
 */
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <!-- 使用计算出的symbolId作为<use>元素的href属性值，引用图标 -->
    <use :href="symbolId" />
  </svg>
</template>

<style lang="scss" scoped>
/**
 * SVG图标的样式定义
 */
.svg-icon {
  width: 1em; /* 设置图标的宽度为1em */
  height: 1em; /* 设置图标的高度为1em */
  fill: currentColor; /* 使用当前文字颜色作为填充色 */
  overflow: hidden; /* 隐藏溢出的内容 */
}
</style>
