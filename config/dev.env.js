'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://127.0.0.1:8000"',
  PUSHER: {
    ENABLED: false,
    KEY: '"123456789"',
    CLUSTER: '"eu"'
  }
})
