<script>
import CartBtn from '@/components/layout/components/header/cart-btn.vue'

export default {
  components: {
    CartBtn
  },
  methods: {
    goToBasket() {
      this.$router.push('/Basket')
    },
    goToCatalog() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div @click="goToCatalog" class="site-header-logo">Tutu</div>
      <cart-btn @click="goToBasket" />
    </div>
  </header>
</template>

<style scoped>
.header {
  z-index: 9999;
  transition:
    background 0.4s,
    all 0.3s linear;
  box-shadow: 2px 17px 17px 3px rgba(221, 221, 221, 0.2);
  background: var(--primary);
  color: var(--white);
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100% !important;
  min-height: 50px !important;
}
.header-content {
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header-logo {
  font-size: 20px;
}
.site-header-logo:before {
  content: '';
  width: 10px;
  height: 10px;
  background: var(--white);
  display: inline-block;
  border-radius: 50%;
  margin-right: 7px;
  position: relative;
  top: -2px;
}
</style>
