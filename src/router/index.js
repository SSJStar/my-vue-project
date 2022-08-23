import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/Login";
const routes = [
  {
    path: '/',
    name: 'loginView',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  },
  {
    path: '/homeView',
    name: 'homeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView
  },
  {
    path: '/myView',
    name: 'myView',
    component: () => import(/* webpackChunkName: "about" */ '../views/My')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test')
  },
  {
    path: '/personInfo',
    name: 'personInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonInfoView')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
