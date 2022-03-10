<template>
  <div id="app">
    <div class="header">
      <t-header />
    </div>
    <div class="body">
      <organ-list v-for="(item, index) in organList" :key="index" :album="item" />
    </div>
  </div>
</template>

<script>
import header from '@/components/header'
import organList from '@/components/organList'

export default {
  name: 'App',
  components: {
    't-header': header,
    organList,
  },
  data() {
    return {
      organList: [
        {
          title: '头颈',
          album: [
            {
              id: 'brain_1',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_2',
              status: 'unlock_1',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_3',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_1',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_2',
              status: 'unlock_2',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_1',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_2',
              status: 'unlock_1',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_3',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
                        {
              id: 'brain_1',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_2',
              status: 'unlock_2',
              desc: '脑 (MRI 3D)'
            },
          ]
        },
        {
          title: '胸部',
          album: [
            {
              id: 'brain_1',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_2',
              status: 'unlock_1',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_3',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
                        {
              id: 'brain_1',
              status: 'lock',
              desc: '脑 (MRI 3D)'
            },
            {
              id: 'brain_2',
              status: 'unlock_2',
              desc: '脑 (MRI 3D)'
            },
          ]
        },
      ]
    }
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
</style>
