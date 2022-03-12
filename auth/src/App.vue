<template>
  <div id="app">
    <div class="link">
    <router-link to="/">/</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/login" v-if="!login">Login</router-link>
    <router-link to="/logout" v-if="login">Logout</router-link>
    </div>
    <router-view class="view"/>
  </div>
</template>

<script>
import auth from '@/util/auth.js'

export default {
  name: 'App',
  data() {
    return {
      login: true,
    }
  },
  beforeUpdate() {
    console.log(auth.loggedIn())
    this.login = auth.loggedIn() ? true : false
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  display: flex;
  justify-content: space-around;
  font-size: 40px;
}
.view {
  font-size: 50px;
  margin-top: 50px;
  text-align: center;
}
</style>
