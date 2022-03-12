// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import goods from '@/views/goods/goods'
import ratings from '@/views/ratings/ratings'
import seller from '@/views/seller/seller'

import './common/stylus/index.styl'
import '../static/css/reset.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

const routes = [
{
    path: '/goods',
    component: goods,
  },
  {
    path: '/ratings',
    component: ratings,
  },
  {
    path: '/seller',
    component: seller
  }
]

const router = new VueRouter({
  // 设置路由的active样式
  linkActiveClass: 'active',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
