<script setup>
import { COUNTRIES } from '@/config/countries';
import { useActionStore } from '@/stores/ActionStore';
import { storeToRefs } from 'pinia';

const actionStore = useActionStore()
const { selectedCountry, countriesCount  } = storeToRefs(actionStore);
</script>

<template>
<!-- Фильтрация по странам -->
    <div class="p-3">
          <div class="filter-sidebar-header">Страны</div>
          <div class="filter-sidebar-content">
                <div class="form-check"
                v-for = "country in COUNTRIES"
                :key = "country.id">
                    <input
                        v-model="selectedCountry"
                        class="form-check-input"
                        type="radio"
                        name="country"
                        :id="`country-${country.id}`"
                        :value="country.id"
                        @change=" actionStore.updateCountryFilter(country.id)"
                    />
                    <label class="form-check-label" for="country-0"> 
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