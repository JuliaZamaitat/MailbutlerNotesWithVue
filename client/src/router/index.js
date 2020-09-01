import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@/components/Notes'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
