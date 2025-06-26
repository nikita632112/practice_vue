import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '@/views/product-catalog.vue'

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
      name: 'cart',
      component: () => import('@/components/Products/CartOrders.vue')
    }
  ],
})

export default router
