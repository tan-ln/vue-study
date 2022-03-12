class Vue {
    constructor (options) {
        this.data = options.data
        this.methods = options.methods

        // Object.keys 返回 data 所有的 key
        Object.keys(this.data).forEach(key => {
            this.proxyKeys(key)
        })

        // 发布者 数据不止用于一个地方
        // 发布者？订阅发布的关系 1 对 多
        observer(this.data)

        // 模板内编译过程中，建立起订阅发布者关系
        new Compile(options.el, this)

        options.mounted.call(this)      // this 指向当前组件
    }

    proxyKeys (key) {
        // 对象 属性名 属性描述
        // Object.defineProperty(obj, prop, descriptor)
        // this => Vue
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            // 将 data 里的数据绑定到 this（vue 实例上，实现代理）
            get: function getter () {
                return this.data[key]
            },
            set: function setter (newVal) {
                this.data[key] = newVal
            }
        })
    }
}