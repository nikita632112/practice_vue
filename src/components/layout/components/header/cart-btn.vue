<script setup>
const props = defineProps({
  cart: Number
})
</script>

<template>
  <div class="cursor-pointer">
    <a href="/cart" class="btn btn-primary">
      Корзина <span class="badge badge-light">{{ props.cart }}</span>
    </a>
  </div>
</template>

<style scoped></style>
