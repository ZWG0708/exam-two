import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },{
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/solt',
    name: 'solt',
    component: () => import(/* webpackChunkName: "solt" */ '../views/Solt.vue')
  },
  {
    path: '/kongle',
    name: 'kongle',
    component: () => import(/* webpackChunkName: "kongle" */ '../views/Kongle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
