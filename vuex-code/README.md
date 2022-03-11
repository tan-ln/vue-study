# vuex-code

## vuex 管理 Vue 大型项目中的数据流
> 小型项目不用 vuex

Vue 项目分为两部分
- Vue VueRouter 界面构建 =》 组件化
- Vuex

## Vuex 
- module    
store 里的一间库房 modules

将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块
- state     
物品 state 状态 数据

- getters   
getters 获取数据的 get 方法 例如对列表进行过滤并计数 可以认为是 store 的计算属性

- action    
搬运 actions 动作 异步

- mutation  
mutation 改变状态的方法 state.count++ 记账