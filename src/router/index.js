import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '@/views/product-catalog.vue'
import ProductCart from '@/views/product-cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'productCatalog',
      component: ProductCatalog,
    },
    {
      path: '/cart',
      name: 'productCart',
      component: ProductCart,
    },
  ],
})

export default router
