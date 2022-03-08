// vue 响应式 观察者模式(发布订阅者模式) pub-sub

// 观察者模式 是 vue 数据响应的核心

function observer(value) {
    console.log(value)
    // 严格校验
    // if (!value || !value instanceof Object) return
    if (!value || typeof value != 'object') return

    // console.log(Object.keys(value))

    Object.keys(value).forEach((key) => {
        // console.log(key)
        defineReactive(value, key, value[key])
    })
    // 数据 _data 里的每个 key: value 都需要被 defineProporty
    // value.defineProporties(obj, {

    // })
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            return val
        },
        set: function reactiveSetter(newVal) {
            if (val === newVal) return
            // 必须赋新的值
            val = newVal
            callback(newVal)
        }
    })
}

function callback(val) {
    console.log('view updata, new value = ' + val)
}

class Vue {
    constructor (options) {
        // 私有属性
        this._data = options.data

        observer(this._data)
    }
}

let o = new Vue({
    data: {
        test: 'I am test',
        name: 'Stark'
    }
})

// 将调用 set 方法
o._data.test = 'hello, test'

// 第二次 set value ，并没有改变值，需要拒绝无效的修改
o._data.test = 'hello, test'