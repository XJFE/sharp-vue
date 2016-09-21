import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import {route} from './routes/index';

// use vue-plugin
Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false
});
// use router
router.map(route);
// start our app
router.start(App, 'app');
