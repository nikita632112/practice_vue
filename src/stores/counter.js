import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('counter', {
  state: () => ({
    products: [
    {id: 1, contry: "Россия", name: "Сочи", price: 240000, url: "https://placeimg.dev/255/255/nature"},
    {id: 2, contry: "Россия", name: "Москва", price: 240000, url: "https://placeimg.dev/255/255/nature"},
    {id: 3, contry: "Россия", name: "Рускеала", price: 240000, url: "https://placeimg.dev/255/255/nature"},
    {id: 4, contry: "Тайланд", name: "Бангкок", price: 240000, url: "https://placeimg.dev/255/255/nature"},
    {id: 5, contry: "Тайланд", name: "Краби", price: 240000, url: "https://placeimg.dev/255/255/nature"},
    {id: 6, contry: "Франция", name: "Париж", price: 440000, url: "https://placeimg.dev/255/255/nature"}],
    
    filters: [{id: 1, name: "Все", amount: "", checked: true}, 
    {id: 2, name: "Россия", amount: "", checked: false}, 
    {id: 3, name: "Франция", amount: "", checked: false}, 
    {id: 4, name: "Тайланд", amount: "", checked: false}],

    cart: [1,4,5]
  }),
  getters: {
    cartCheck(){
      let arr = [...this.products];
      arr.forEach(item => {
        if(this.cart.includes(item.id)) item.inCart = true;
        else item.inCart = false
      });
      return arr
    }
  },
  actions: {
    addToCart(id){
      if(this.cart.includes(id)) this.cart.splice(this.cart.indexOf(id), 1)
      else this.cart.push(id);
    }
  }
})
