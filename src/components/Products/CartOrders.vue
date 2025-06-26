<script setup>
import { useActionStore } from '@/stores/ActionStore';
import { storeToRefs } from 'pinia';

const actionStore = useActionStore()
const { cartItems, totalPrice } = storeToRefs(actionStore)
</script>

<template>
  <div class="cart-page">
    <div class="container mt-5 pt-4">
      <router-link to="/" class="btn btn-outline-primary mb-4">Вернуться</router-link>
      <h2 class="mb-4">Ваши заказы</h2>
      <div v-if="cartItems.length === 0" class="empty-cart alert alert-info">
        Ваша корзина пуста
      </div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.id" class="cart-item card mb-3">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 class="card-title">{{ item.city }}, {{ item.country }}</h5>
              <div class="card-text">{{ item.price.toLocaleString() }} руб.</div>
            </div>
            <button 
              @click="actionStore.removeFromCart(item.id)"
              class="btn btn-outline-danger">
              Удалить
            </button>
          </div>
        </div>
        <div class="cart-total card ">
          <div class="card-body">
            <h4 class="mb-0">Итого: {{ totalPrice.toLocaleString() }} руб.</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 70px;
}

.cart-total {
  margin-top: 20px;
}

.empty-cart {
  padding: 20px;
  text-align: center;
}
</style>