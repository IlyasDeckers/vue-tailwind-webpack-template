import Vue from 'vue'
import Pusher from 'vue-pusher'

if (process.env.PUSHER.ENABLED) {
  Vue.use(Pusher, {
    api_key: process.env.PUSHER.KEY,
    options: {
      cluster: process.env.PUSHER.CLUSTER,
      encrypted: true
    }
  })
}
