<script setup>
defineProps({
  id: Number,
  country: String,
  city: String,
  imageUrl: String,
  price: Number,
  inCart: Boolean,
 })
</script>

<template>
<!-- Карточка товара -->
    <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="card-img" :src="imageUrl" :alt="city" />
            </div>
            <div class="card-body">
              <p>{{ country }}</p>
              <h4 class="card-product__title">{{ city }}</h4>
              <p class="card-product__price">{{ price }} руб.</p>
              <p>
                <button type="button" :class="['btn', inCart ? 'btn-danger' : 'btn-primary']">
                    {{ inCart ? 'Отмена' : 'Заказать' }}
                </button></p>
            </div>
    </div>
</template>

<style scoped>  
    .card-product {
        min-width: 200px;
    }
</style>