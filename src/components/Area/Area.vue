<script>
import inp from "./input.vue"
import { ref } from 'vue'
export default {
  data() {
    return {
      tours: [
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'}
      ]
    }
  },
  method: {

  }
}

</script>

<template>
    <div class="col-xl-9 col-lg-8 col-md-7 p-3">
        <div class="products-area">
          <div class="card text-center card-product" v-for="tour in tours">
            <div class="card-product__img">
              <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
            </div>
            <div class="card-body">
              <p>{{ tour.Country }}</p>
              <h4 class="card-product__title">{{ tour.town }}</h4>
              <p class="card-product__price">{{ tour.price }}</p>
              <p><button type="button" @click="" class="btn btn-primary">Заказать</button></p>
            </div>
          </div>
        </div>
      </div>
</template>