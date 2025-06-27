<script>
import { ref } from 'vue'
import inp from './input.vue'

export default {
  props: {
    town: {
      type: String
    },
    countryNum: {
      type: Number
    }
  },
  data() {
    return {
      activeClass: ref('btn'),
      errorClass: ref('btn-primary'),
      isActive: true,
      text: "Заказать",
      tours: [
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Франция', town: 'Париж', price: '300 000 руб'},
        {Country:'Франция', town: 'Париж', price: '300 000 руб'},
        {Country:'Франция', town: 'Париж', price: '300 000 руб'},
        {Country:'Франция', town: 'Париж', price: '300 000 руб'},
        {Country:'Франция', town: 'Париж', price: '300 000 руб'},
        {Country:'Франция', town: 'Париж', price: '300 000 руб'},
        {Country:'Тайланд', town: 'Бангкок', price: '100 000 руб'},
      ],
    }
  },
  methods: {
    toggleclass() {
      this.isActive = !this.isActive;
      if (this.isActive == false){
        this.text = "Отмена"
      }
      else{
        this.text = "Заказать"
      }
    },
  },
  computed: {
//    countryList() {
//      let c = this.countryNum;
//      return this.tours.filter(function (elem) {
//        if (c===0) return true;
//        else if (c===1) return elem.countryNum.indexOf(c) == "Россия";
//        else if (c===2) return elem.countryNum.indexOf(c) == "Франция";
//        else return elem.countryNum.indexOf(c) == "Тайланд";
//      })
//    },
    filteredList() {
      let t = this.town;
      return this.tours.filter(function (elem) {
        if(t==='') return true;
        else return elem.town.indexOf(t) !== -1;
      })
    }
  }
}
</script>

<template>
<div class="card text-center card-product" v-for="tour in filteredList">
  <div class="card-product__img">
    <img class="card-img" src="https://placeimg.dev/255/255/nature" />
  </div>
  <div class="card-body">
    <p>{{ tour.Country }}</p>
    <h4 class="card-product__title">{{ tour.town }}</h4>
    <p class="card-product__price">{{ tour.price }}</p>
    <p><button type="button" @click="toggleclass" :class="[isActive ? errorClass : 'btn-danger', activeClass]"> {{ text }} </button></p>
  </div>
</div>
</template>

<style>
.card-product {
  min-width: 200px;
}
</style>