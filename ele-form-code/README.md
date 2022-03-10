# ele-form

## 表单 rules 验证
> 为每一个 form-item 验证对应的 rules，需要冒泡向上传递事件，需要指定上级的某个组件，某个事件 执行 并拿到参数，$emit 只能向上(父级)传递自定义事件，
- vue mixin 手写一个 dispatch
    - $parent
    - $options
    - componentName
```js
// form-item.vue
// mixins 是以 methods 方式向外暴露方法，直接引用 emitter
mixins: [emitter],

mounted () {
    // 组件名，事件名，参数（以数组的形式）
    this.dispatch('ElForm', 'el.form.addField', [this])
}
```
```js
// emitter.js
dispatch(componentName, eventName, params) {
      // 获取父组件名
      var parent = this.$parent
      var name = parent.$options.componentName
      // 找到 与 componentName 匹配的组件
      while (parent && (name !== componentName || !name)) {
        parent = parent.$parent
      }
      // console.log(parent)
      if (parent) {
        // emit 事件、参数 给目标组件
        // $on 监听事件 
        // apply 绑定作用域
        parent.$emit.apply(parent, [eventName].concat(params))
      }
}
```
```js
// form.vue
created () {
    // 监听事件
    // created 时监听所有子组件 
    this.$on('el.form.addField', field => {
        // 所有子组件对象
        this.fields.push(field)
    })
}

// 验证方法
methods: {
    validate () {
      this.fields.forEach(field => {
        field.validate('', (messge, field) => {

        })
      })
    }
},
```
## $slots
