// eventbus 解决兄弟组件事件传递问题，本质是订阅发布者模式，发布组件发布了事件，订阅组件就能获得事件的改变，摆脱了兄弟组件之间通信需要父组件转达，vuex是中大型项目使用的

// vue实例，作为中间者，形成发布订阅关系
// 实例具有 $emit() $on() api
import Vue from 'vue'

export default new Vue()
