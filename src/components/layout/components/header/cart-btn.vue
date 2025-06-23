<script setup>
import { ref } from 'vue'

const count = ref(1)
</script>

<template>
  <div class="cursor-pointer">
    <a class="btn btn-primary">
      Корзина <span class="badge badge-light">{{ count }}</span>
    </a>
  </div>
</template>

<style scoped></style>
