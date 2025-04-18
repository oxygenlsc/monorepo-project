import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'
import Test from '../views/test/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/test',
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        title: 'test',
      },
    },
  ],
})

export default router
