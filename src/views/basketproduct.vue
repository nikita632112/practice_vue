<script>
import ProductCatalog from '@/views/product-catalog.vue'

export default {
  components: {
    ProductCatalog
  },
  data() {
    return {
      basketlist: [
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'},
        {Country:'Россия', town: 'Сочи', price: '200 000 руб'}
      ]
    }
  },
  methods: {
    basketElem(elem) {
      basketlist.push(this.elem)
    }
  }
}
</script>

<template>
  <ProductCatalog :basketlist="basketlist"/>
</template>

<style scoped>

</style>
