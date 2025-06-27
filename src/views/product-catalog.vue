<script setup>
  import CardList from '@/components/CardList.vue';
  import FilterCountry from '@/components/FilterCountry.vue';
  import FilterCity from '@/components/FilterCity.vue';
  import { useProductStore } from "@/stores/products";
  const productStore = useProductStore();
</script>

<template>
  <div class="catalog">
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-5">
        <div class="p-3">
          <filter-country/>
        </div>
      </div>
      <div class="col-xl-9 col-lg-8 col-md-7 p-3">
        <div class="col" style="padding: 0px">
          <filter-city/>
        </div>
        <card-list :products="productStore.sortedAndSearchedProducts"/>
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
