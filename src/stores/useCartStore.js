import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('cart')) || []
    }),
    getters: {
        totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),

        totalPrice: (state) => state.items.reduce((total, item) => 
            total + (item.product.price * item.quantity), 0)
    },
    actions: {
        saveToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.items))
        },
        addToCart(product) {
            const existingItem = this.items.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({ product, quantity: 1 });
            }
            this.saveToLocalStorage()
        },
        removeFromCart(productId) {
            this.items = this.items.filter(item => item.product.id !== productId);
            this.saveToLocalStorage()
        },

        updateQuantity(productId, newQuantity) {
            const item = this.items.find(item => item.product.id === productId);
            if(item) {
                item.quantity = newQuantity
                this.saveToLocalStorage()
            }
        }
    }
})