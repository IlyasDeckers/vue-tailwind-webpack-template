'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://127.0.0.1:8000"',
  PUSHER: {
    ENABLED: true,
    KEY: '"028d91c748f82d72ccd4"',
    CLUSTER: '"eu"'
  }
})
