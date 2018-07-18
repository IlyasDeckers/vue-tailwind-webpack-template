const appConfig = require('../src/app.config')

module.exports = {
  title: appConfig.title + ' Docs',
  description: appConfig.description,
  themeConfig: {
    sidebar: [
      '/docs/configuration',
      '/docs/architecture',
      '/docs/development',
      '/docs/plugins',
      '/docs/routing',
      '/docs/store',
      '/docs/components'
    ]
  },
}
