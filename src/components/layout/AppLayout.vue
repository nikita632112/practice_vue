<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <LayoutHeader />
  <div class="content">
    <slot></slot>
  </div>
</template>

<style scoped>
.content {
  height: 100%;
  width: 100%;
}
</style>
