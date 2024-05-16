<script setup lang="ts">
import Footer from './Footer/index.vue'
</script>

<template>
  <section class="app-main">
    <div>
      234yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
    </div>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <Footer />
  </section>
</template>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  display: block;
  margin-left: 240px;
}
</style>
