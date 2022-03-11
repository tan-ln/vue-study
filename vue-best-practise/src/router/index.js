import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/404'
import TimeEntries from '@/components/TimeEntries'
// import LogTime from '@/components/LogTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/time-entries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time',
          // component: LogTime
          // 懒加载
          component: resolve => require(['@/components/LogTime.vue'], resolve)
        }
      ]
    }
  ]
})
