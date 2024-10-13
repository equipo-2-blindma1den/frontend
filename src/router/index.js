import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/login.vue';
// import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
  { path: '/app', component: login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
