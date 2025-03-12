import { createApp } from 'vue'
//引入pinia
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// import './assets/main.css'

//引入elementPLus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIConsVue from '@element-plus/icons-vue'

const app = createApp(App)


// //让图标生效
// for (const [key, component] of Object.entries(ElementPlusIConsVue)) {
//     app.component(key, component)
// }

//创建pinia实例，并将其插入到app中
app.use(createPinia())
app.use(router)
//将插件插入到app中
app.use(ElementPlus);
app.mount('#app')
