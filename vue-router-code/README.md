# vue-router-code
## vue 用于开发 SPA 框架，路由接管一切
> vue 是一个 MVVM 框架
> vue 生态：VueRouter Vuex ElementUI Axios


页面 / views 跟 route url 相匹配

- main.js 根组件声明 router

- router-link
取代 `a` 标签，是 `VueRouter` 提供的组件，在 `Vue.use(VueRouter)` 时注册为全局组件，

- router-view 挂载点 对应 url ，显示页面组件的内容

- mode  
第一种模式 `hash` 未使用前 url: http://localhost:8080/#/foo     
第二种模式 `mode: history` url: http://localhost:8080/foo

## router 前端路由 区分由 ngnix Apache 等配置的后端路由      
> 前端路由解决的是 SPA ，url 切换，页面不会刷新

1. history api => pushState()、onPopState() 
移除之前的组件，更新新的组件    
它的格式和传统的后端 url 是一样的

    **缺点** : 兼容性

2. hash 模式
在 url 后面加锚点，ie8 以后就不会刷新页面了，同样可以得到事件

同一个页面，不同的状态(对应 url)

## router-link to 传值
`<router-link :to="{name: xxx, params: {key: value}}">valueString</router-link>`

## redirect 重定向
```js
export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params
    },
    {
      path:'/goback',
      redirect:'/'      // 重定向
    }
  ]
})
```
**重定向传参**
```js
{
  path:'/params/:newsId(\\d+)/:newsTitle',
  component:Params
},{
  path:'/goParams/:newsId(\\d+)/:newsTitle',
  redirect:'/params/:newsId(\\d+)/:newsTitle'
}
```

## alias 别名
```js
{
    path: '/hi1',
    component: Hi1,
    alias:'/jspang'
 }


<router-link to="/jspang">jspang</router-link>
```
**redirect和alias的区别**

redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。

alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。

## 路由钩子函数
```js
beforeEnter:(to, from, next) => {
    next()
    // next(false)
    // next(true)
    // next({ path: '/' })
}
```