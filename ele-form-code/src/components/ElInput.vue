<template>
  <div>
    <template v-if="type !== 'textarea'">
      <input class="el-input__inner" :type="type" ref="input" @input="handleInput">
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput (event) {
      // console.log(event)
    }
  }
}
</script>

<style>

</style>
