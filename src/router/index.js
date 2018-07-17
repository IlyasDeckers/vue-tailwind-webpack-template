import Vue from 'vue'
import Router from 'vue-router'

import { routes as demo } from '@/app/demo/routes'
import { routes as app } from '@/app/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    ...demo,
    ...app
  ]
})
