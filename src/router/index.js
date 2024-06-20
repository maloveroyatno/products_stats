/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import ListProducts from '@/pages/ListProducts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/config",
      component: ListProducts,
    },
  ],
})

export default router
