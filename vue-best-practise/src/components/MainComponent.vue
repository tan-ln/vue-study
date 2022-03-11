<template>
  <div>
    <click-component v-for="i in 5" :key="i" :index="i"></click-component>
    <show-component></show-component>
  </div>
</template>

<script>
import ClickComponent from '@/components/ClickComponent'
import ShowComponent from '@/components/ShowComponent'

export default {
  components: { ClickComponent, ShowComponent }
}
</script>

<style>

</style>
