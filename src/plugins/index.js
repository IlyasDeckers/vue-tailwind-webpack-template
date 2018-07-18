import Vue from 'vue'
import Pusher from 'vue-pusher'
import pusherConfig from './pusher'

import { install as Auth } from './auth'
import { install as Http } from './http'
import { install as Toastr } from './toastr'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import light from '@fortawesome/fontawesome-pro-light'
import brands from '@fortawesome/fontawesome-free-brands'
import regular from '@fortawesome/fontawesome-pro-regular'

if (process.env.PUSHER.ENABLED) Vue.use(Pusher, pusherConfig)
Vue.use(Auth)
Vue.use(Http)
Vue.use(Toastr)

fontawesome.library.add(solid, light, brands, regular)

export { default as auth } from './auth'
export { default as http } from './http'
