<script setup>
import CardItem from './CardItem.vue';
defineProps({
  products: Array
});
</script>

<template>
  <div class="products-area">
    <card-item
    v-for="product in products"
    :key="product.id"
    :id="product.id"
    :product="product"
    />
  </div>
</template>

<style>
.products-area {
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
}
</style>
