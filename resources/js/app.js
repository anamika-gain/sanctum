require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
import App from './App.vue';
import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
const app = createApp(App)
app.use(number)
app.config.globalProperties.$axios = axios
app.mount('#app')



 const router = new VueRouter({
     mode: 'history',
     routes: routes
 });

 const app = new Vue({
     el: '#app',
     router: router,
 render: h => h(App),
 });
