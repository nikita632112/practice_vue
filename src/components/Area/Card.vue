<script>
import CardItem from './CardItem.vue'

export default {
  components: {
    CardItem
  },
  props: {
    town: {
      type: String
    },
    countryNum: {
      type: String
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
      switch(this.countryNum){
        case "1": return this.tours.filter(function (elem) {if (elem.Country == 'Россия') return elem});
        case "2": return this.tours.filter(function (elem) {if (elem.Country == 'Франция') return elem});
        case "3": return this.tours.filter(function (elem) {if (elem.Country == 'Тайланд') return elem});
        default: return this.tours;
      }
    },
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
  <CardItem 
    v-for="tour in filterCountry"
    :tour="tour"
  />
</template>

<style>
.card-product {
  min-width: 200px;
}
</style>