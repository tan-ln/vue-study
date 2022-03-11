<template>
  <div id="wrapper">
    <p>
      FullName: {{fullName}}
    </p>
    <p>
      FirstName: <input type="text" v-model="firstName" />
    </p>
    <p>
      obj.a {{obj.a}}
    </p>
    <p>
      obj.a
      <input type="text" v-model="obj.a"/>
    </p>
    <main-component></main-component>
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/time-entries">计划列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <side-bar />
      </div>
      <div class="col-sm-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import MainComponent from '@/components/MainComponent'

export default {
  name: 'App',
  components: { MainComponent, SideBar },
  data () {
    return {
      firstName: 'Sherlock',
      lastName: 'Holmes',
      fullName: '',
      obj: {
        a: '123'
      }
    }
  },
  computed: {
    // fullName () {
    //   return `${this.firstName} · ${this.lastName}`
    // }
  },
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' · ' + this.lastName
    // }
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' · ' + this.lastName
      },
      // 立即改变
      immediate: true,
      // 监听底层，不止一次
      deep: true
    },
    obj: {
      handler (newVal, oldVal) {
        console.log('obj has changed')
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style>

</style>
