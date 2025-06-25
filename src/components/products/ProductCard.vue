<script setup>
import { useCartStore } from '@/stores/userCartStore.js'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const props = defineProps ({
    product: {
        type: Object,
        required: true
    }
})

const cartStore = useCartStore()
const { items } = storeToRefs(cartStore)

const isInCart = computed(() => 
    cartStore.items.some(item => item.product.id === props.product.id)
)

const addToCart = () => {
    if (isInCart.value) {
        cartStore.removeFromCart(props.product.id)
    } else {
        cartStore.addProductToCart(props.product)
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
        :class="['btn', isInCart ? 'btn-danger' : 'btn-primary']"
        @click = "addToCart"
        >
        Заказать
      </button></p>
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
