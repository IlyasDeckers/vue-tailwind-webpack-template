# Plugins

## Authentication
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

## Pusher
If you have enabled pusher in your environment you can subscribe to channels and listen for events like this:
```js
const channel = this.$pusher.subscribe("chanel")
channel.bind('event-name', async event => {
    // Do something
})
```
