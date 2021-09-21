import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '@/router/dashboard'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'dashboard-statistics' } },
  ...dashboard,
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
