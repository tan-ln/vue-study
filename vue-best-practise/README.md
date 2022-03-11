# vue-best-practise

- 404 NotFound
非法闯入或不存在页面
```js
{
  path: '*', // 贪婪匹配
  component: NotFound
}
```
- 子路由/二级路由
```js
{
path: '/time-entries',
component: TimeEntries,
children: [                     // 数组
    {
        path: 'log-time',       // 子路由不需要 / -> 代表根路径
        component: LogTime
    },
]
}
```
- 子路由懒加载
```js
children: [
    {
        path: 'log-time',
        // component: LogTime
        // 懒加载
        component: resolve => require(['@/components/LogTime.vue'], resolve)
    }
]
```

- css in js
用 js 的方式引入 css

- $route
`$route.path` 当前路由对象的路径，会被解析为绝对路径

- eventbus

    // eventbus 解决兄弟组件事件传递问题，本质是订阅发布者模式，发布组件发布了事件，订阅组件就能获得事件的改变，摆脱了兄弟组件之间通信需要父组件转达，vuex是中大型项目使用的

    // vue实例，作为中间者，形成发布订阅关系

    // 实例具有 $emit() $on() api 发布和订阅事件

- 使用 eventProxy 代替 eventbus
```js
import EventProxy from 'vue-event-proxy'
Vue.use(EventProxy)
```
```js
// global:修饰符，使得全局都能捕获事件
this.$emit('global:getTarget', event.target.dataset.index)
// 同样使用 global: 修饰符捕获
this.$on('global:getTarget', index => {
    this.html = `第${index}个元素被点击了`
})
```

- watch 侦听器
```js
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' · ' + this.lastName
    // }
    // 高级语法
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' · ' + this.lastName
      },
      // 立即改变
      immediate: true,
      // 监听底层，不止一次
      deep: true
    }
  }
```