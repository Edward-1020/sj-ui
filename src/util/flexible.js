/*
 * @Author: EdwardYoung
 * @Date: 2017-10-25 15:56:00
 * @Last Modified by: EdwardYoung
 * @Last Modified time: 2017-10-25 16:32:01
 */

/**
 *  设计稿尺寸转换：设计尺寸(px) / 100 = 实际尺寸(rem) 例：100px = 1rem
 */

 export default function (window) {
   // 设计稿宽度
   const docWidth = 750

   const doc = window.document
   const docEl = doc.documentElement
   let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

   const recalc = (function refreshRem () {
     const clientWidth = docEl.getBoundingClientRect().width

     // 8.55：小于320px不再缩小，11.2：大于420px不再放大
     docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px'

     return refreshRem
   })()

   // 添加倍屏标识，安卓为1
   docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1)

   if (!doc.addEventListener) return
   window.addEventListener(resizeEvt, recalc, false)
   doc.addEventListener('DOMContentLoaded', recalc, false)
 }
