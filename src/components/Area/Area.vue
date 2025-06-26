<script>
import { ref } from 'vue'

import inp from './input.vue'
export default {
  components: {
    inp,
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
    filteredList(){
      let t = this.town;
      return this.tours.filter(function (elem) {
        if(t==='') return true;
        else return elem.town.indexOf(t) !== -1;
      })
    }
  },
  props: {
    town: String
  }
}

</script>

<template>
    <div class="col-xl-9 col-lg-8 col-md-7 p-3">
      <inp />
        <div class="products-area">
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
        </div>
      </div>
</template>