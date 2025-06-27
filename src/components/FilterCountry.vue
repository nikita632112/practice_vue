<script setup>
  import { storeToRefs } from 'pinia';
  import { useProductStore } from "@/stores/products";
  const productStore = useProductStore();
  const { countriesCountList, productsCountAll, selectedCountry } = storeToRefs(productStore);
</script>

<template>
  <div class="filter-sidebar-header">Страны</div>
    <div class="filter-sidebar-content">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="country"
          id="country-0"
          :value="'Все'"
          v-model="selectedCountry"
          checked
        />
        <label class="form-check-label" for="country-0"> Все ({{ productsCountAll }}) </label>
      </div>
      <div
      class="form-check"
      v-for="(count, country) in countriesCountList"
      :key="country"
      >
        <input
          class="form-check-input"
          type="radio"
          name="country"
          :id="`country-${country}`"
          :value="country"
          v-model="selectedCountry"
        />
        <label class="form-check-label" :for="`country-${country}`"> {{country}} ({{ count }}) </label>
      </div>
    </div>
</template>

<style>
.filter-sidebar-header {
  background: var(--primary);
  min-height: 40px;
  display: flex;
  align-items: center;
  color: var(--white);
  border-radius: 10px;
  font-size: 15px;
  padding: 0 5px;
}

.filter-sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
}
</style>
