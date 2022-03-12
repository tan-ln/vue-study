<template>
  <div id="app">
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
// .router-fade-enter 组件进入的一瞬间
// .router-fade-enter-active 进入的整个过程
// 完全进入后移除这个类名
@import './stylus/common'

  .router-fade-enter-active,
  .router-fade-leave-active
    transition opacity 0.3s
  .router-fade-enter,
  .router-fade-leave-active
    opacity 0
    
</style>

