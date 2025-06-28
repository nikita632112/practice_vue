<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      activeClass: ref('btn'),
      errorClass: ref('btn-primary'),
      isActive: true,
      text: "Заказать",
    }
  },
  props: {
    tour: {
      type: Object,
      required: true
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
}
</script>

<template>
<div class="card text-center card-product">
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

</style>