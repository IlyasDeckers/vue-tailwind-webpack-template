import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import { sync } from 'vuex-router-sync'
import '@/plugins'
import * as components from './components'

sync(store, router)

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
