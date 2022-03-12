# eleme-demo

- index.html 页面 是webpack
1. 移动端适配 px -> rem --》config/rem.js

- transition

- 路由 lazyload
```js
const home = () => import('@/page/home')
```
通过函数加载，路由到页面时，再加载

- $router.meta.keepalive
路由上的属性 meta 

- lbs 应用 location base service
核心 经纬度 latitude longitude

- mutations-types.js
将所有的状态改变放在这里，mutation 说明清单

- [函数名](参数){函数体}
es6 函数写法

- tag属性

- 动态路由，匹配所有城市，传参 =》根据 id，: 表示参数 
```html
<router-link :to="'/city/' + item.id" v-for="item in hotCity" :key="item.id" tag="li">
    {{item.name}}
</router-link>
```
```js
    {
      // 动态路由，匹配所有城市，根据 id，: 表示参数
      path: '/city/:cityid',
      component: city
    }
```
**参数限定格式-正则**
> () 内部正则，转义
```js
    {
        // cityid 必须为数字
      path: '/city/:cityid(\\d+)',
      component: city
    }
```

- $router $route
$router 整个组件的路由对象
$route 当前页面的路由行为 可以得到当前路由的参数

1. 获取router传参：        
`this.$route.params.cityid`

2. 编程式导航-跳转
`this.$router.go(-1)`

```js
this.$router.push({
    path: '/msite',
    query: {
        geohash
    }
})
```
`this.$route.query.geohash`

**params 和 query 区别：**
`url: /city/25?a=1`
params 是查询参数 是 url 的一部分 => 25
query String 是 ? 后面的东西 是查询对象 查询条件的补充 => a = 1

## 约定文档

## 业务经验一：navigationBar 封装
- history 返回按钮
- title 居中
- 右边的 buttons



## 获取数据
callback => Promise().then() => async await => axios