// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.directive('decorar',{
  bind(el, binding, vnode){
    el.style.fontFamily = binding.value;

    if(binding.modifiers['negrilla']){
      el.style.fontWeight = 'bold';
    }
   
    if(binding.modifiers['italico']){
      el.style.fontStyle = 'italic';
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
