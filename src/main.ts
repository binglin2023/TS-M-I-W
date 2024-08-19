import { createApp } from 'vue';
// import './style.css'
import App from './App.vue'
import 'normalize.css'
import router from './router'
import { setupStore } from './store'
import "@icon-park/vue-next/styles/index.css";
import myComponent from "./plugins/component";

async function initApp() {
    const app = createApp(App)

    app.config.errorHandler = function (_err, _vm: any, _info) { };

    app.use(setupStore).use(router).use(myComponent).mount('#app')
}

void initApp()