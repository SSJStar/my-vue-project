import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VForm3 from 'vform3-builds'  //引入VForm3库
import 'vform3-builds/dist/designer.style.css'//引入VForm3样式
import ElementPlus from 'element-plus'//引入element-plus
import 'element-plus/dist/index.css'  //引入element-plus样式

// import store from "core-js/internals/shared-store";
// import './plugins/element.js'

// import locale from 'element-plus/lib/locale/lang/zh-cn'
const app = createApp(App)

// createApp(App).use(store).use(router).use(ElementPlus,{locale}).mount('#app')
app.use(VForm3)  //全局注册VForm3(同时注册了v-form-designe、v-form-render等组件)
app.use(ElementPlus)//全局注册ElementPlus

app.use(router).mount('#app')

//全局注册组件 - GlobalView
import GlobalView from '@/components/GlobalView'
app.component("GlobalView",GlobalView)