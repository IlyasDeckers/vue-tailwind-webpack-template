import Vue from 'vue'
import Router from 'vue-router'

import { routes as app } from '@/app'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    ...app
  ]
})
