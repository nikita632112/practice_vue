<script setup>
import {useCounterStore} from '@/stores/counter'
const CounterStore = useCounterStore()
</script>

<template>
  <div class="cursor-pointer">
    <a class="btn btn-primary">
      Корзина <span class="badge badge-light">{{ CounterStore.count }}</span>
    </a>
  </div>
</template>

<style scoped></style>
