// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {routes} from './Routes';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

const enrouter = new VueRouter({
                routes:routes,
                mode: 'history'
            });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router: enrouter,
  template: '<App/>'
})
