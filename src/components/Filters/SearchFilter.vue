<script setup>
import { computed } from 'vue'
import { useActionStore } from '@/stores/ActionStore'
const actionStore = useActionStore()
const search = computed( {
  get() {
    return actionStore.search
  },
  set(value){
    actionStore.updateSearch(value.trim())
  }
})
</script>

<template>
<!-- Поисковая строка -->
    <div class="col" style="padding: 0px">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Название города" v-model="search" />
          </div>
    </div>
</template>

<style scoped></style>