<script>
import FilterItem from "@/components/layout/components/filter/filter-item.vue";

export default {
    name: "filter-list",
    components: {
        FilterItem
    },
    props: {
        filters: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            selectedFilter: ""
        }
    },
    watch: {
        selectedFilter(newValue){
            this.$emit('update:modelValue', newValue)
        }
    }
}
</script>

<template>
    <div>
        <div class="filter-sidebar-header">Страны</div>
        <div class="filter-sidebar-content">

        <!---Фильтр опция--->
        <filter-item v-model="selectedFilter" v-for="filter in filters" :key="filter.id" :filter="filter" />

        <!--<div class="form-check">
            <input
            class="form-check-input"
            type="radio"
            name="country"
            id="country-1"
            value="1"
            />
            <label class="form-check-label" for="country-1"> Россия (10) </label>
        </div>
        <div class="form-check">
            <input
            class="form-check-input"
            type="radio"
            name="country"
            id="country-2"
            value="2"
            />
            <label class="form-check-label" for="country-2"> Франция (5) </label>
        </div>
        <div class="form-check">
            <input
            class="form-check-input"
            type="radio"
            name="country"
            id="country-3"
            value="3"
            />
            <label class="form-check-label" for="country-3"> Тайланд (6) </label>
        </div>-->

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