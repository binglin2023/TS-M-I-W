import { createApp } from 'vue';
// import './style.css'
import App from './App.vue'
import 'normalize.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setupStore } from './store'

async function initApp() {
    const app = createApp(App)

    app.config.errorHandler = function (_err, _vm: any, _info) { };

    app.use(setupStore).use(router).use(ElementPlus).mount('#app')
}

void initApp()