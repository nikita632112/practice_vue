<script setup>
import { useCartStore } from '@/stores/useCartStore.js';
import CartItem from '@/components/cart/CartItem.vue';

const cartStore = useCartStore()
</script>

<template>
    <div class="cart">
        <h3 class="mt-5">Корзина</h3>
        <div v-if="cartStore.items.length === 0">Корзина пуста</div>
        <div v-else>
            <CartItem 
            v-for="item in cartStore.items"
            :key="item.product.id"
            :item="item"
            />
            <div class="cart-total">
                <h4>Итого: {{ cartStore.totalPrice }}</h4>
                <h5>Всего товаров: {{ cartStore.totalItems }}</h5>
                <button @click="checkout" class="btn btn-lg btn-primary">Оформть заказ</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.empty-cart {
  text-align: center;
  padding: 40px;
  font-size: 18px;
}
.cart-summary {
  margin-top: 20px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}
</style>