import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalItems(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice(state) {
      return state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    },
  },
  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    },
  },
})