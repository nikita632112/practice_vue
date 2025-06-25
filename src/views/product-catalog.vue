<script setup>
import Filter from '@/components/Filter.vue'
import Area from '@/components/Area/Area.vue'
</script>

<template>
  <div class="catalog">
    <div class="row">
      <Filter />
      <Area />
    </div>
  </div>
</template>

<style scoped>
.catalog {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 70px;
}
</style>
