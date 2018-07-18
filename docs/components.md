# components

## Base components
It is possible to register base components in your app under the `src/components` folder. Components prefixed with `_base-` will be loaded in automatically. This functionality is handled in `index.js`.
```js
// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('.', false, /_base-[\w-]+\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/_base/, '').replace(/\.\w+$/, ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
```
## Generating components
```bash
npm run new component
```
### Base components
When running the `new component` command you can prefix the component name with `base-`. This will register the component globally.
```bash
? Name: base-test
? Blocks: <script>

Loaded templates: _templates
  added: src/components/_base-test.vue
```
## Font Awesome
Font Awesome is registered globally in the icon component, this component takes two values. `icon` and `size`.
Example:
```js
<icon :icon="['fas', 'user']" size="lg">
```
