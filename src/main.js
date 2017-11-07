import Vue from 'vue'
import App from './App'

import './scss/base.scss'
import './scss/reset.scss'
import './scss/button.scss'
import './scss/popup.scss'
import './scss/badge.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
