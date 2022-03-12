# Vue 源码

## 生命周期函数
```js
constructor (options) {
    this.data = options.data
    this.methods = options.methods
    options.mounted.call(this)      // this 指向当前组件
}
```

## 代理 data、属性
```js
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
```

## Object.defineProperty(obj, prop, descriptor)
在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
```js
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
```

## observer 模式

## compile 编译更新标签和属性事件

- 使用文档碎片
```js
// 从外到内，编译出来的 html node 是碎片化的 append 到 this.el 更新节点，重绘次数过多性能较低
// 使用文档碎片，最后一次性更新到 dom

// this.el会被编译后的 html 替换
if (this.el) {
    // 文档碎片没有标签，会承载所有改变，但不会立即更新到页面上
    this.fragment = this.nodeToFragment(this.el)
    // 编译并更新
    this.compileElement(this.fragment)
    this.el.appendChild(this.fragment)
} else {
    console.log('DOM 元素不存在')
}


nodeToFragment (el) {
    // 创建碎片
    var fragment = document.createDocumentFragment()
    var child = el.firstChild
    // 遍历所有子节点
    while (child) {
        // 加入文档碎片
        fragment.appendChild(child)
        child = el.firstChild
    }
    return fragment
}
```

- childNodes、node.attributes 等类数组 借用 数组的方法
> call 指针传递
```js
var childNodes = el.childNodes;
        // 类数组 借用 数组的方法
        [].slice.call(childNodes).forEach(node => {...
```
```js
Array.prototype.forEach.call(nodeAttrs, attr => {
```

- nodeType 节点类型

    节点类型	    NodeType
    元素element	    1
    属性attr	    2
    文本text	    3
    注释comments	8
    文档document	9