import Vue from 'vue'

import { install as Auth } from './auth'
import { install as Http } from './http'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import light from '@fortawesome/fontawesome-pro-light'
import brands from '@fortawesome/fontawesome-free-brands'
import regular from '@fortawesome/fontawesome-pro-regular'

fontawesome.library.add(solid, light, brands, regular)

Vue.use(Auth)
Vue.use(Http)

export { default as auth } from './auth'
export { default as http } from './http'
export { default as pusher } from './pusher'
