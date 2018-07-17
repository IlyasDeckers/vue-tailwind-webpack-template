# boilerplate

> A Vue.js project

## Features

* Authentication with Vuex
* Reusable components
* Tailwind CSS
* Prebuild SCSS examples
* Fontawesome (PRO) inegration
* ...

## Installation
### Font Awesome Pro
Create a .npmrc file in the project root and add the following line with your license key.
```bash
@fortawesome:registry=https://npm.fontawesome.com/{{ your key }}
```

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Usage
### Font Awesome
Font Awesome is registered globally in the icon component, this component takes two values. `icon` and `size`.
Example:
```js
<icon :icon="['fas', 'user']" size="lg">
```

## Tests
Tests are not yet implemented
```bash
# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
