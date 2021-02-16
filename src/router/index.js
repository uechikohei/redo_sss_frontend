import Vue from 'vue'
import Router from 'vue-router'

import SignUp from '@/views/SignUp'
import SignIn from '@/views/SignIn'
import User from '@/views/users/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/v1/users',
      name: 'User',
      component: User
    },
  ]
})