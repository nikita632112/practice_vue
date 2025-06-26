<script setup>
import { useCartStore } from '@/stores/useCartStore.js'

const cartStore = useCartStore()

</script>

<template>
  <router-link to="/cart" class="cart-button text-white">
   <h5>Корзина ({{ cartStore.totalItems }})</h5>
  </router-link>
</template>

<style scoped>
.cart-button {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
