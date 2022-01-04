require('./bootstrap');

import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue';

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

// Added axios to vue prototype
Vue.prototype.$axios = axios

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
