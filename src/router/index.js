import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from './adminRoutes.js'
import UserLayout from '@/layouts/UserLayout.vue'
import UserHome from '@/views/user/UserHome.vue'
import UserAbout from '@/views/user/UserAbout.vue'

const routes = [
  {
    path: '/',
    component: UserLayout,
    children: [
      { path: '', component: UserHome },
      { path: 'about', component: UserAbout },
    ]
  },
  ...adminRoutes 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
