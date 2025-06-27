<script setup>
import CountryFilter from '@/components/Filters/CountryFilter.vue'
import SearchFilter from '@/components/Filters/SearchFilter.vue'
import ProductList from '@/components/Products/ProductList.vue'
</script>

<template>
  <!-- Основной родительский шаблон -->
  <div class="catalog">
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-5">
        <CountryFilter />
      </div>
      <div class="col-xl-9 col-lg-8 col-md-7 p-3">
        <SearchFilter />
        <ProductList />
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
