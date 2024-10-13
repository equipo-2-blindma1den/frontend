import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/login.vue';
// import Login from '../views/Login.vue';
import app from '../views/app.vue';
import home from '../views/home.vue';
import register from '../views/complete-register.vue';
import profile from '../views/profile.vue';


const routes = [
  { path: '/',  redirect: '/login'},
  { path: '/login', component: login },
  { path: '/app', component: app },
  { 
    path: '/app',
    redirect: '/app/home',
    children: [
      { path: 'home', component: home },
      { path: 'profile', component: profile },
      { path: 'register', component: register },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
