import { createRouter, createWebHashHistory }  from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import weather from '../views/weather/index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'weather',
    component: weather
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});


export default router;