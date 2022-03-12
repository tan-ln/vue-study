import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazyload
const home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const city = () => import('@/pages/city')
const msite = () => import('@/pages/msite')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta: {
        keepalive: true
      },
    },
    {
      // 动态路由，匹配所有城市，根据 id，: 表示参数
      path: '/city/:cityid',
      component: city
    },
    {
      path: '/msite',
      component: msite
    }
  ]
})
