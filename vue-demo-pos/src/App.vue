<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav'

export default {
  name: 'App',
  components: { LeftNav, }
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei";
}
.main {
  float: left;
  width: 95%;
  height: 100%;
  background-color: #eff2f7;
  overflow: hidden;
}
</style>
