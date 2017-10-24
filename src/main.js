import Vue from 'vue'
import App from './App'

import './scss/common/normalize.scss'
import './scss/button.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
