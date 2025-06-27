<script setup>
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/products';
const productStore = useProductStore();
</script>

<template>
  <div class="cursor-pointer">
    <a class="btn btn-primary" @click="$router.push('/cart')">
      Корзина <span class="badge badge-light" v-if="productStore.cartAmount > 0">{{ productStore.cartAmount }}</span>
    </a>
  </div>
</template>

<style scoped></style>
