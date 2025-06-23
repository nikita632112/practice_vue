<script setup>
import LayoutHeader from '@/components/layout/components/header/layout-header.vue'
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
