import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'
import Test from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/childOne/*', component: Test },
  ],
})

export default router
