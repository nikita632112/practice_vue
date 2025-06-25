<script setup>
import { defineModel } from 'vue'

const model = defineModel()
</script>

<template>
  <div class="col" style="padding: 0px">
    <div class="input-group">
      <input v-model="search" type="text" class="form-control" placeholder="Название города"/>
    </div>
  </div>
</template>