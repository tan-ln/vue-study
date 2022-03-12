import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/util/auth.js'

import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Logout from '@/views/Logout'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  // console.log(to, from, next)
  console.log(auth.loggedIn())
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      // 带参
      query: {
        redirect: to.fullPath
      }
    })
  }
  next()
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      component: Logout,
      afterEnter: requireAuth
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
    },
  ]
})
