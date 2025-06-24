<script setup>
import Filter from '@/components/Filters/Filter.vue'
import SearchBar from '@/components/Filters/SearchBar.vue'
import ProductList from '@/components/Filters/ProductList.vue'
</script>

<template>
<!-- Основной родительский шаблон -->
  <div class="catalog">
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-5">
        <Filter />
      </div>
      <div class="col-xl-9 col-lg-8 col-md-7 p-3">
          <SearchBar />
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
