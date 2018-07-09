import Vue from 'vue'

import { install as Auth } from './auth'
import { install as Http } from './http'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

// import VueChatScroll from 'vue-chat-scroll'

fontawesome.library.add(brands)

Vue.use(Auth)
Vue.use(Http)
// Vue.use(VueChatScroll)

export { default as auth } from './auth'
export { default as http } from './http'
