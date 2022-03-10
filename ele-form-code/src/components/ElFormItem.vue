<template>
  <div class="el-form-item">
    <label class="el-form-item__label" v-if="label || $slots.label">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="el-form-item__content">
      <slot />
    </div>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'

export default {
  props: {
    label: String,
    prop: String,
  },
  mixins: [emitter],
  mounted () {
    // field 生成
    // 冒泡向上传递事件 $emit 只能向上传递自定义事件
    // 需要指定上级的某个组件，某个事件 执行 并拿到参数
    // el.form.addField 命名空间，可读性
    // [this] 

    this.dispatch('ElForm', 'el.form.addField', [this])
  },
  computed: {
    // 找到 ElForm 组件
    form () {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName != 'ElForm') {
        parent = parent.$parent
        parentName = parent.$options.componentName
      }
      return parent
    }
  },
  methods: {
    validate (trigger, callback) {
      // 当前 item 对应的 rules ？=> app.vue、ElForm 内
      // 所有 rules
      const rules = this.form.rules
      // 当前 item 对应的 rules 
      const item_rule = rules[this.prop]
      console.log(item_rule)
    }
  }
}
</script>

<style>

</style>
