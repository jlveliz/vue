import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = "https://tarejas-a2bb0.firebaseio.com";

export var bus = new Vue(); 

new Vue({
  el: '#app',
  render: h => h(App)
})
