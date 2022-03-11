import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/404'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      component: NotFound,
    }
  ]
})

// beforeEach 全局前置导航守卫 (afterEach...)
// to 即将要进入的路由对象
// from 当前正要离开 的路由
// next() 进行管道 中的下一个 钩子
router.beforeEach((to, from, next) => {
  // 服务器端在客户端种下的 cookie 每个用户唯一的token
  let token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          // 路由对象属性 .fullPath 完成解析后的 URL，包含查询参数和 hash 的完整路径
          redirect: to.fullPath
        }
      })
    }
  }
  next()
})

export default router
