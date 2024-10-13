import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/login.vue';
import home from '../views/home.vue';
import register from '../views/complete-register.vue';
import profile from '../views/profile.vue';
import { SessionService } from '@/services/session';


const routes = [
  { path: '/',  redirect: '/login'},
  { path: '/login', component: login },
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

router.beforeEach(async (to, from, next) => {
    const userId = Number(localStorage.getItem('v_userId') || 0);
    const isAuthenticated = userId !== 0; 
    console.log('USERID', userId);
    if (to.path.startsWith('/app') && !isAuthenticated) {
        next('/login');
    } 
    else if (to.path.startsWith('/login') && isAuthenticated){
        next('/app');
    }
    else if (!['/login', '/app', '/app/home', '/app/profile', '/app/register'].includes(to.path)) {
        next(isAuthenticated ? '/app' : '/login');
    } 
    else {
        next();
        await SessionService.getUser(userId);
    }
});



export default router;
