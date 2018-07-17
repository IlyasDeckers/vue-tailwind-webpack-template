import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import { sync } from 'vuex-router-sync'
import VueHighlightJS from 'vue-highlightjs'

import '@/plugins'
import '@/components/_globals'

sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueHighlightJS)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
