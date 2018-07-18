# Configuration

## Environment
You can set your `API_URL` & `PUSHER` variables in the config folder. Edit the `dev.env.js` and `prod.env.dev`.
```js
 module.exports = {
  NODE_ENV: '"production"',
  API_URL: '"http://127.0.0.1:8000"',
  PUSHER: {
    ENABLED: false, // Set to true to use Pusher
    KEY: '"xxxxxx"',
    CLUSTER: '"xx"'
  }
}
```
## Font Awesome Pro
Create a .npmrc file in the project root and add the following line with your license key.
```bash
@fortawesome:registry=https://npm.fontawesome.com/{{ your key }}
```
