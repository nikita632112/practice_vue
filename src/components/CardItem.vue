<script setup>
import { useProductStore } from '@/stores/products';
const productStore = useProductStore();
defineProps({
  product: Object
});
</script>

<template>
  <div class="card text-center card-product">
    <div class="card-product__img">
      <img class="card-img" :src=product.img_url alt="" />
    </div>
    <div class="card-body">
      <p>{{ product.country }}</p>
      <h4 class="card-product__title">{{ product.city }}</h4>
      <p class="card-product__price">{{ product.price }} руб</p>

      <p v-if="productStore.isInCart(product)">
        <button type="button" class="btn btn-danger" @click="productStore.removeFromCart(product.id)">Отмена</button>
      </p>
      <p v-else>
        <button type="button" class="btn btn-primary" @click="productStore.addToCart(product.id)">Заказать</button>
      </p>
    </div>
  </div>
</template>

<style scoped>
.card-product {
  min-width: 200px;
}
</style>
