<script setup>
import { useProductStore } from '@/stores/useProductStore'
import { debounce } from 'lodash-es'

const productStore = useProductStore()

const handleSearch = debounce((e) => {
  productStore.setSearchQuery(e.target.value)
}, 300)

</script>

<template>
  <div class="col" style="padding: 0px">
    <div class="input-group">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Название города"
        @input="handleSearch"
      />
    </div>
  </div>
</template>

<style scoped></style>
