import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/login.vue';
// import Login from '../views/Login.vue';
import app from '../views/app.vue';

const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
  { path: '/app', component: app },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
