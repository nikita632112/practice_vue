<script setup>
import { useCartStore } from '@/stores/useCartStore.js'
import { computed } from 'vue'

const props = defineProps ({
    product: {
        type: Object,
        required: true
    }
})

const cartStore = useCartStore()


const isInCart = computed(() => 
  cartStore.items.some(item => item.product.id === props.product.id)
)

const toggleCart = () => {
  if (isInCart.value) {
    cartStore.removeFromCart(props.product.id)
  } else {
    cartStore.addToCart(props.product) 
  }
}

</script>

<template>
  <div class="card text-center card-product">
    <div class="card-product__img">
      <img class="card-img" :src="product.image" alt="" />
    </div>
    <div class="card-body">
      <p>{{ product.country }}</p>
      <h4 class="card-product__title">{{ product.city }}</h4>
      <p class="card-product__price">{{ product.price.toLocaleString() }} руб</p>
      <p><button 
        type="button" 
        :class="['btn', isInCart.value ? 'btn-danger' : 'btn-primary']"
        @click="toggleCart"
      >{{ isInCart ? 'В корзине' : 'Заказать' }}</button></p>
    </div>
  </div>
</template>

<style scoped>
.card-product {
  min-width: 200px;
  margin-bottom: 20px;
  transition: transform 0.2s;
}

.card-product:hover {
  transform: translateY(-5px);
}
</style>
