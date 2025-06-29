<script>
import CardItem from './CardItem.vue'

export default {
  components: {
    CardItem
  },
  props: {
    townName: {
      type: String
    },
    countryNum: {
      type: String
    },
    basketlist:{
      type: Array
    }
  },
  data() {
    return {
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
  computed: {
    filterCountry() {
      let filtered = []
      let q = []
      switch(this.countryNum) {
        case "1": q = this.tours.filter(function (elem) {if (elem.Country == 'Россия') return filtered = elem}); break;
        case "2": q = this.tours.filter(function (elem) {if (elem.Country == 'Франция') return filtered = elem}); break;
        case "3": q = this.tours.filter(function (elem) {if (elem.Country == 'Тайланд') return filtered = elem}); break;
        default: q = this.tours; break;
      }
      let t = this.townName;
      return q.filter(function (elem) {
        if(t==='') return true;
        return elem.town.indexOf(t) !== -1;
      })
    }
  },
  methods: {
    basketElem(elem) {

    }
  }
}
</script>

<template>
  <CardItem 
    v-for="tour in filterCountry"
    :tour="tour"
    @basketElem="basketElem"
  />
</template>

<style>
.card-product {
  min-width: 200px;
}
</style>