<script setup>
  import CardList from '@/components/CardList.vue';
  import { useProductStore } from '@/stores/products';
  const productStore = useProductStore();
</script>

<template>
  <div class="catalog">
    <h2>Заказы</h2>
    <div class="row">
      <div class="p-3">
        <card-list :products="productStore.productsInCart"/>
      </div>
    </div>
  </div>
</template>

<style>
.catalog {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 70px;
}
</style>
