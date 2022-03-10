function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    // 冒泡向上传递事件 $emit 只能向上传递自定义事件
    // 需要指定上级的某个组件，某个事件 执行 并拿到参数

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
        parent.$emit.apply(parent, [eventName].concat(params))
      }

      // 原方法
      // var parent = this.$parent || this.$root;
      // var name = parent.$options.componentName;

      // while (parent && (!name || name !== componentName)) {
      //   parent = parent.$parent;

      //   if (parent) {
      //     name = parent.$options.componentName;
      //   }
      // }
      // if (parent) {
      //   parent.$emit.apply(parent, [eventName].concat(params));
      // }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
}
