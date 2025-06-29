import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '@/views/product-catalog.vue'
import productbasket from '@/views/basketproduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'productCatalog',
      component: ProductCatalog,
    },
    {
      path: '/basket',
      name: 'productbasket',
      component: productbasket,
    },
  ],
})

export default router