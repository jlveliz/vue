import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Secure from '@/components/Secure'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure
    },
    {
      path: '/hello',
      name: 'hello',
      component:HelloWorld
    }
  ]
})
