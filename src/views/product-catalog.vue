<script setup>
import { useProductStore } from '@/stores/useProductStore.js'
import CountryFilter from '@/components/filters/CountryFilter.vue'
import SearchInput from '@/components/UI/SearchInput.vue'
import ProductList from '@/components/products/ProductList.vue'

const productsStore = useProductStore()

</script>

<template>
  <div class="catalog">
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-5">
        <CountryFilter />
        <SearchInput />
      </div>
      <div class="col-xl-9 col-lg-8 col-md-7 p-3">
        <div class="products-area">
          <ProductList v-if="productsStore.filteredProducts.length"/>
          <div v-else class="text-muted">Товары не найдены</div>
        </div>
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

.products-area {
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
}

</style>
