<script setup>
import LayoutHeader from '@/components/layout/components/header/layout-header.vue'

const props = defineProps({
  cart: Number
})
</script>

<template>
  <LayoutHeader :cart="props.cart" />
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
