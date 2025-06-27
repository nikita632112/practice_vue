<script setup>
  import { storeToRefs } from "pinia";
  import { useProductStore } from "@/stores/products";
  const productStore = useProductStore();
  const { searchQuery } = storeToRefs(productStore);
</script>

<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Название города" v-model="searchQuery" />
  </div>
</template>
