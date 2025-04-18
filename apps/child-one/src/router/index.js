import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'
import Test from '../views/test/index.vue'
import PathTwo from '../views/PathTwo/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/service-board',
    },
    {
      path: '/service-board',
      name: 'ServiceBoard',
      component: Test,
      meta: {
        title: '服务看板',
      },
    },
    {
      path: '/path-two',
      name: 'path-two',
      component: PathTwo,
      meta: {
        title: '第二个路由',
      },
    },
  ],
})

export default router
