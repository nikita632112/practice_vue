import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'productCatalog',
      component: () => import ('@/views/product-catalog.vue'),
    },
  ],
})

export default router
