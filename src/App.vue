<script setup>
import { RouterView } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <router-view v-slot="{ Component }">
      <component :is="Component" style="padding: 20px"/>
    </router-view>
  </AppLayout>
</template>

<style scoped>
body {
  margin: 0;
  background: white !important;
}
</style>
