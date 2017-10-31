import Vue from 'vue'

const _global = Vue.prototype.$isServer ? global : window

//  默认popup环境配置参数
const DEFAULT_CONTEXT = {
  idSeed: 1,
  zIndex: 2000,
  hasModal: false,
  instance: {},
  modalStack: []
}
//  如果环境配置参数不存在， 则使用默认配置
if (!_global.popupContext) {
  _global.popupContext = {
    ...DEFAULT_CONTEXT
  }
}

//  字面量构造对象暴露出弹窗环境方法，保护_global对象
const PopupContext = {
  getContext (key) {
    return _global.popupContext[key]
  },

  setContext (key, value) {
    _global.popupContext[key] = value
  },

  plusKeyByOne (key) {
    const oldVal = +_global.popupContext[key]
    _global.popupContext[key] = oldVal + 1

    return oldVal
  }
}

export default PopupContext
