<template>
  <form class="el-form" :class="[{'el-form--inline': inline}, labelPosition ? 'el-form--label-' + labelPosition : '']">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'ElForm',
  componentName: 'ElForm',
  props: {
    rules: Object,
    model: Object,
    inline: Boolean,
    labelPosition: String,
  },
  data () {
    return {
      fields: []
    }
  },
  methods: {
    validate () {
      this.fields.forEach(field => {
        field.validate('', (messge, field) => {

        })
      })
    }
  },
  created () {
    // 监听事件
    // created 时监听所有子组件 
    this.$on('el.form.addField', field => {
      // 所有子组件对象
      this.fields.push(field)
    })
  }
}
</script>

<style>

</style>
