# vue-eleme-app

- linkActiveClass       
设置路由的active样式
```js
// 老写法
<div class="tab-item">
    <router-link to="/goods" active-class="active">商品</router-link>
</div>
<div class="tab-item">
    <router-link to="/ratings" active-class="active">评论</router-link>
</div>
<div class="tab-item">
    <router-link to="seller" active-class="active">商家</router-link>
</div>
```
```js
// 新写法
const router = new VueRouter({
    // 设置路由的active样式
    linkActiveClass: 'active',
    routes
})
```

- nextTick
> Vue 异步执行 DOM 更新

1. 在 Vue 生命周期的 created() 钩子函数进行的 **DOM操作** 一定要放在 Vue.nextTick() 的回调函数中
2. 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的 DOM 结构的时候，这个操作都应该放进 Vue.nextTick() 的回调函数中

> Vue.nextTick 用于延迟执行一段代码，它接受2个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回promise对象