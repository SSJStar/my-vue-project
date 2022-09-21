import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Home from '../views/Home.vue'
// import LoginView from "@/views/Login";
const routes = [
  // {
  //   path: '/',
  //   name: 'loginView',
  //   component: import(/* webpackChunkName: "about" */ '../views/Login')
  // },
  {
    path: '/',
    name: 'homeView',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   children:[
  //     {
  //       path: '/mainView',
  //       name: 'mainView',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/MainView')
  //     },
  //     {
  //       path: '/myView',
  //       name: 'myView',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/My')
  //     },
  //   ],
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  //   // component: Home
  // },
  {
    path: '/homeView',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/myView',
    name: '我',
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
  {
    path: '/father',
    name: 'father',
    component: () => import(/* webpackChunkName: "about" */ '../views/FatherView')
  },
  {
    path: '/mainView',
    name: 'mainView',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView')
  },
  {//xlsx文件的读取和导出
    path: '/xlsxView',
    name: 'xlsxView',
    component: () => import(/* webpackChunkName: "about" */ '../views/XlsxView')
  },
  {//直方图
      path: '/btChatView',
    name: 'btChatView',
    component: () => import(/* webpackChunkName: "about" */ '../views/BTChatView')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
