import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import './router/permission'

// 导入重置样式
import './style/reset.scss'
// 导入全局样式
import './style/index.scss'
// 导入element-plus样式
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
