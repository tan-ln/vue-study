class Observer {
    constructor (data) {
        this.data = data
        this.walk(data)
    }

    walk (data) {
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }

    defineReactive (data, key, val) {
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function getter () {
                return val
            },
            set: function setter(newVal) {
                val = newVal
            }
        })
    }
}

function observer(value, vm) {
    if (!value || typeof value !== 'object') {
        return
    }
    return new Observer(value)
}