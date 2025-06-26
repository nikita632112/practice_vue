<script setup>
import { useCartStore } from '@/stores/useCartStore';

const props = defineProps ({
    item: {
        type: Object,
        reqired: true
    }
})

const cartStore = useCartStore()

const updateQuantity = (newQuantity) => {
    if(newQuantity < 1) return
    cartStore.updateQuantity(props.item.product.id, newQuantity)
}
</script>

<template>
  <div class="cart-item">
    <img :src="item.product.image" :alt="item.product.name">
    <div class="d-flex flex-column">
        <div class="item-info">
        <h3>{{ item.product.country }} ({{ item.product.city }})</h3>
        <p>{{ item.product.price }} ₽</p>
        </div>
        
        <div class="item-actions">
        <button class="btn btn-primary btn-sm" @click="updateQuantity(item.quantity - 1)">-</button>
        <span>{{ item.quantity }}</span>
        <button class="btn btn-primary btn-sm" @click="updateQuantity(item.quantity + 1)">+</button>
        <button class="btn btn-danger btn-sm" @click="cartStore.removeFromCart(item.product.id)">Удалить</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}
.item-actions {
  display: flex;
  gap: 10px;
  align-items: center;

}
</style>