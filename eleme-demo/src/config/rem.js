(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', // 小型设备 orien :PC resize
        // 重新计算
        recalc = function() {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return
            // console.log(clientWidth)
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
            // iphone5 字体 20px  16 rem
        }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
