import {createRouter,createWebHashHistory} from 'vue-router';
import Page1 from './pages/Page1.vue';
import Page2 from "./pages/Page2.vue";
 
const routes = [
  { path: '/Page1', component: Page1 },
  { path: '/Page2', component: Page2 },
]
 
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
 
export default router;
