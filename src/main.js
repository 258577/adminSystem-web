import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/index.less"
import router from './router'

// 全局引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// pinia
import { createPinia } from 'pinia'
// 假数据拦截
import '@/api/mock.js'

// axios全局
import api from '@/api/api'

const pinia = createPinia()
const app = createApp(App)

// 注册
app.config.globalProperties.$api = api

app.use(ElementPlus)
app.use(router).mount('#app')
app.use(pinia)

// icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

