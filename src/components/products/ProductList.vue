<script setup>
import { useProductStore } from '@/stores/useProductStore.js'
import ProductCard from '@/components/products/ProductCard.vue'
import { storeToRefs } from 'pinia' 

const productStore = useProductStore()
const { filteredProducts } = storeToRefs(productStore)
</script>

<template>
  <div class="products-area">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped>
.products-area {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 15px 0;
}
</style>