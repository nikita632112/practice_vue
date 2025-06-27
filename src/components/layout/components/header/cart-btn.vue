<script setup>
import {useCounterStore} from '@/stores/counter';
import { storeToRefs } from 'pinia';
const { count } = storeToRefs(useCounterStore());
</script>

<template>
  <div class="cursor-pointer">
    <router-link to="/cart" class="btn btn-primary">
    Корзина <span v-if="count >= 0" class="badge badge-light">{{ count }}</span>
    </router-link>
  </div>
</template>

<style scoped></style>