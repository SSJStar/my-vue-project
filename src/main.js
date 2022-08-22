import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import store from "core-js/internals/shared-store";
// import ElementPlus from 'element-plus'
// import './plugins/element.js'

// import locale from 'element-plus/lib/locale/lang/zh-cn'

createApp(App).use(router).mount('#app')
// createApp(App).use(store).use(router).use(ElementPlus,{locale}).mount('#app')