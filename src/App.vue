<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
    <router-view v-slot="{ Component }">
    <component :is="Component" style="padding: 20px"/>
  </router-view>
</template>

<style scoped>
body {
  margin: 0;
  background: white !important;
}
</style>
