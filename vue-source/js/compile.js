class Compile {
    constructor (el, vm) {
        this.vm = vm
        this.el = document.querySelector(el),
        // 文档碎片
        // 模板是无法编译的
        // 从外到内，编译出来的 html node 是碎片化的 append 到 this.el 更新节点，重绘次数过多性能较低
        // 使用文档碎片，最后一次性更新到 dom
        this.fragment = null
        this.init()
    }

    init () {
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
    }

    nodeToFragment (el) {
        var fragment = document.createDocumentFragment()
        var child = el.firstChild
        while (child) {
            fragment.appendChild(child)
            child = el.firstChild
        }
        return fragment
    }

    // 递归调用
    compileElement (el) {
        // 换行作为文本节点
        var childNodes = el.childNodes;
        // 类数组 借用 数组的方法
        [].slice.call(childNodes).forEach(node => {
            var reg = /\{\{(.*)\}\}/
            // 标签内的内容
            var text = node.textContent
            // console.log(text)

            // 标签节点 或是 文本节点
            if (this.isElementNode(node)) {
                this.compile(node)
            } else if (this.isTextNode(node) && reg.test(text)) {
                // 正则结果 title name 相当于 data 的key
                this.compileText(node, reg.exec(text)[1])
            }

            // 递归子节点
            if (node.childNodes && node.childNodes.length) {
                this.compileElement(node)
            }
        })
    }

    compile (node) {
        // 指令
        var nodeAttrs = node.attributes
        // 类数组 借用 数组的方法
        // 获取所有的属性
        Array.prototype.forEach.call(nodeAttrs, attr => {
            // console.log(attr)
            var attrName = attr.name
            if (this.isDirective(attrName)) {
                var exp = attr.value
                var dir = attrName.substring(2)

                // v-on
                if (this.isEventDirective(dir)) {
                    this.compileEvent(node, this.vm, exp, dir)
                } else {
                    // v-model
                }
            }
        })

    }

    compileEvent (node, vm, exp, dir) {
        // 事件名
        const eventType = dir.split(':')[1]
        // 回调函数在 methods 里面
        var callback = vm.methods && vm.methods[exp]
        if (eventType && callback) {
            // bind
            node.addEventListener(eventType, callback.bind(vm), false)
        }
    }

    compileText (node, Exp) {
        console.log(this.vm)
        var initText = this.vm[Exp]
        this.updateText(node, initText)
    }

    updateText (node, value) {
        // console.log(value)
        node.textContent = typeof value === 'undefined' ? '' : value
    }

    isElementNode (node) {
        // 元素节点 nodeType == 1
        return node.nodeType == 1
    }

    isTextNode (node) {
        // 文档节点 nodeType == 3
        return node.nodeType == 3
    }

    isDirective (attr) {
        // 以 v- 开始，是 属性
        return attr.indexOf('v-') == 0
    }

    isEventDirective (dir) {
        // 判断是否是事件
        return dir.indexOf('on:') == 0
    }

    
}
