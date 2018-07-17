import axios from 'axios'
import store from '@/store'
import router from '@/router'

const http = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

http.interceptors.response.use(function (response) {
  return response
}, error => {
  if (error.response.status === 401) {
    router.push('/')
    store.dispatch('auth/logout')
  }
})

export function install (Vue) {
  Vue.prototype.$http = http
}

export default http
