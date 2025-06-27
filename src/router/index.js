import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '@/views/product-catalog.vue'
import Cart from '@/views/cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'productCatalog',
      component: ProductCatalog,
      meta: {
        title: 'Каталог Товаров'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title: 'Корзина'
      }
    }
  ],
})

router.beforeEach((to) => {
  const { title } = to.meta;
  const defaultTitle = 'Default Title';
  document.title = title || defaultTitle
})

export default router
