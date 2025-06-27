<script setup>
import { RouterView } from 'vue-router'
import Layout from '@/components/layout/layout.vue'
import {useProductStore} from '@/stores/counter.js'
const store = useProductStore();

function productsCount(){
      let arr = store.products.filter(item => item.inCart)

      store.filters.forEach(item => {
        if(item.name === "Все") item.amount = arr.length;
        else item.amount = arr.filter(x => x.contry === item.name).length
      });
      return store.filters;
    }

</script>

<template>
  <Layout :cart="store.cart.length">
    <RouterView :filters="store.filters" :products="store.cartCheck" :productsCount="productsCount()" @add-to-cart="store.addToCart"/>
  </Layout>
</template>

<style scoped></style>
