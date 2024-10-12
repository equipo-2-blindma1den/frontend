import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/welcome.vue';
// import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/login', component: WelcomeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
