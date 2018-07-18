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
If you have enabled pusher in your environment you can subscribe to channels and listen for events. Inside your components, you just need to access the $pusher object.

```js
// Subscribe to a channel
const channel = this.$pusher.subscribe('my-channel')

// Listen for an event
channel.bind('my-event', async event => {
  console.log(event)
})

// Unsubscribe
this.$pusher.unsubscribe('my-channel');
```

## Toastr
Display non-blocking notifications
```js
this.$toastr.s('Validation success', 'Success!')
this.$toastr.w('Validation warning', 'Warning!')
this.$toastr.i('Validation info', 'Info!')
this.$toastr.e('Validation errors', 'Error!')
```

It is possible to pass in extra parameters.
```js
this.$toastr.e({
  msg: 'Your message',
  timeout: 10000, // set to 0 for infinit
  closeOnHover: true,
  position: 'toast-top-right',
  progressbar: false,
  preventDuplicates: true
}, 'Title!')
```
