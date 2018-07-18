const _ = require('lodash')
// Use a random port number for the mock API by default,
// to support multiple instances of Jest running
// simultaneously, like during pre-commit lint.
process.env.MOCK_API_PORT = process.env.MOCK_API_PORT || _.random(9000, 9999)

module.exports = {
  setupFiles: ['<rootDir>./test/unit/setup'],
  globalSetup: '<rootDir>/test/unit/global-setup',
  globalTeardown: '<rootDir>/test/unit/global-teardown',
  setupTestFrameworkScriptFile: '<rootDir>/test/unit/matchers',
  testMatch: ['**/(*.)unit.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '@/([^\\.]*)$': '<rootDir>/src/$1',
    //'vue$': 'vue/dist/vue.esm.js'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/main.js',
    '!src/app.vue',
    '!src/router/index.js',
    '!src/app/routes.js',
    '!src/app/demo/routes.js',
    '!src/store/store.js',
    '!src/store/helpers.js',
    '!src/store/modules/index.js',
    '!src/components/_globals.js',
  ],
  // https://facebook.github.io/jest/docs/en/configuration.html#testurl-string
  // Set the `testURL` to a provided base URL if one exists, or the mock API base URL
  // Solves: https://stackoverflow.com/questions/42677387/jest-returns-network-error-when-doing-an-authenticated-request-with-axios
  testURL:
    process.env.API_BASE_URL || `http://localhost:${process.env.MOCK_API_PORT}`,
  globals: {
    'vue-jest': {
      // Disable CSS compilation until it's more stable
      experimentalCSSCompile: false,
    },
  },
}
