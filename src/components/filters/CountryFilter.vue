<script setup>
import { COUNTRIES_LIST } from '@/config/countries'
import { useProductStore } from '@/stores/useProductStore.js'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { selectedCountry, countriesCount } = storeToRefs(productStore)


</script>

<template>
  <div class="p-3">
    <div class="filter-sidebar-header">Страны</div>
    <div class="filter-sidebar-content">
      <div 
      class="form-check"
      v-for="country in COUNTRIES_LIST"
      :key="country.id"
      >
        <input
          class="form-check-input"
          type="radio"
          name="country"
          :id="`country-${country.id}`"
          :value="country.id"
          v-model="selectedCountry"
          @change="productStore.setSelectedCountry(country.id)"
        />
        <label class="form-check-label" :for="`country-${country.id}`">
          {{ country.name }} ({{ countriesCount[country.id] || 0 }})
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
