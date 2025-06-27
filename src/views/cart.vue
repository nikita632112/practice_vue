<script>
import FilterList from "@/components/layout/filter.vue";
import Search from "@/components/layout/search.vue";
import ProductList from "@/components/layout/product-list.vue";

import {useProductStore} from '@/stores/counter.js'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const storage = useProductStore()

export default {
  components: {
    FilterList,
    Search,
    ProductList
  },
  props: {
    filters: {
      type: Array,
      required: true
    },
    products: {
      type: Array,
      required: true
    },
    productsCount: {
      type: Array
    }
  },
  data() {
    return {
      changedFilter: "Все",
      searchValue: "",
      arr: this.products.filter(item => item.inCart)
    }
  },
  computed: {
    filtration(){
      let arr = this.products.filter(item => item.inCart)
      if(this.changedFilter == "Все") return arr
      return [...arr].filter(item => item.contry === this.changedFilter);
    },
    searching(){
      return this.filtration.filter(item => item.name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()))
    }
  }
}

</script>
<template>

  <div class="catalog">
    <div class="row no-gutters">

      <!---Левая половина--->
      <div class="col-xl-3 col-lg-4 col-md-5">
        <div class="p-3">
        
          <filter-list v-model="changedFilter" :filters="productsCount"/><!---Фильтр--->

        </div>
      </div>

      <!---Правая половина--->
      <div class="col-xl-9 col-lg-8 col-md-7 p-3">

        <search v-model="searchValue" :search-value="searchValue"/><!---Поиск--->
        <product-list :products="searching" @add-to-cart="$emit('add-to-cart', $event)"/><!---Лист товаров--->

      </div>

    </div>
  </div>

</template>

<style scoped>
.catalog {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 70px;
}
</style>
