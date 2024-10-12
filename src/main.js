import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';
import './style.css'
import App from './App.vue'
import router from './router';

import '@ionic/vue/css/typography.css';

createApp(App)
    .use(IonicVue)
    .use(router)
    .mount('#app')
