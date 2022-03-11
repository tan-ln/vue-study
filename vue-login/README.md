# vue-login

## vue-router
- meta 路由元信息
> 每个路由对象为 路由记录，路由记录可以是嵌套，当匹配多个路由记录，如父路由记录以及子路由记录

$route.matched 数组包含当前路由的所有嵌套路径片段的路由记录

需要遍历 $route.matched 来检查路由记录中的 meta 字段。

- beforeEach 全局前置导航守卫
> 当一个导航触发时，全局前置守卫按照创建顺序调用
```js
// to 即将要进入的路由对象
// from 当前正要离开 的路由
// next() 进行管道 中的下一个 钩子
router.beforeEach((to, from, next) => {
    next()
})
```

- next('/') 或者 next({ path: '/' })
> 跳转到一个不同的地址。当前的导航被中断
```js
next({
    path: '/login',
    query: {
        // 路由对象属性 .fullPath 完成解析后的 URL，包含查询参数和 hash 的完整路径
        redirect: to.fullPath
    }
})
```
