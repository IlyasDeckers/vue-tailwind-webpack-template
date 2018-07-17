# WIP: Vue.JS boilerplate
> A Vue.js boilerplate for creating quality SPA's with the TailwindCSS framework.

## Introduction
This repository is created as a personal boilerplate for rapid Vue.JS development. I use this template at a daily basis to test new ideas, prototype and build production ready SPA's. This repository will be updated at a regular basis.

## Features

* Authentication
* Reusable components
* Tailwind CSS
* Bootstrap like buttons
* Fontawesome (PRO) inegration
* Pusher intigration

## Installation
### Environment
You can set your `API_URL` & `PUSHER` variables in the config folder. Edit the `dev.env.js` and `prod.env.dev`.
```js
 module.exports = {
  NODE_ENV: '"production"',
  API_URL: '"http://127.0.0.1:8000"',
  PUSHER: {
    KEY: '"xxxxxx"',
    CLUSTER: '"xx"'
  }
}
```
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
### Authentication
Authentication is handled bij the Auth plugin located in plugins/auth.js. You can use this plugin from any page to login, logout, check,... without importing the auth plugin.
> Important! The auth plugin expects the Bearer token to be present in the response under `access_token`.

```js
// Login
this.$auth.login({
    email: 'John@doe.com',
    password: 'xxx'
})

// Logout
this.$auth.logout()

// Check authentication
this.$auth.isAuthenticated()

// returns the authenticated user object
this.$auth.get('user')

// returns the authenticated user id
this.$auth.get('user.id')

// Send a simple HTTP request to test the bearer token.
this.$auth.hello()
```

### Pusher
If you have enabled pusher in your environment you can subscribe to channels and listen for events like this:
```js
const channel = this.$pusher.subscribe("chanel")
channel.bind('event-name', async event => {
    // Do something
})
```

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
