# auth

> A Vue.js project

## vue router
- redirect
访问根路径，直接跳转
```js
{
    path: '/',
    redirect: '/about'
},
- beforeEnter
路由 钩子函数 url 还没有完成
```js
beforeEnter: (to, from, next) => {
    to // 点击要去的页面
    from // 来
}
```
to 要去的地方
from 从哪里来
next 接下来做什么

也可以 `beforeEnter: requireAuth` 一个函数
