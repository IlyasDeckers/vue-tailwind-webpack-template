<template>
  <div class="m-8">
    <h1>Vue.JS Boilerplate</h1>

    <div class="">
      <h2 class="py-2">1. Configuration</h2>
    </div>
    <div class="border-b">
      <h2 class="py-2">1.1 Environment Files</h2>
    </div>

    <div class="flex my-4">
      <div class="w-1/3 text-grey">
        <p class="py-4 text-black">
          You can set your API_URL & PUSHER variables in the config folder. Edit the <code>dev.env.js</code> and <code>prod.env.dev</code>.
        </p>
      </div>

      <div class="w-2/3">
        <pre class="w-full" v-highlightjs="environment">
          <code class="javascript bg-grey-lighter rounded-lg border p-4"></code>
        </pre>
      </div>
    </div>

    <div class="border-b">
      <h2 class="py-2">1.2. Authentication</h2>
    </div>

    <div class="flex my-4">
      <div class="w-1/3 text-grey">
        <p class="py-4 text-black">
          Authentication is handled bij the Auth plugin located in <code>plugins/auth.js</code>. You can use this plugin from any page to login, logout, check,... without importing the auth plugin.
        </p>
        <p class="text-black">
          Important! The auth plugin expects the Bearer token to be present in the response under <code>access_token</code>
        </p>
      </div>

      <div class="w-2/3">
        <pre class="w-full" v-highlightjs="auth">
          <code class="javascript bg-grey-lighter rounded-lg border p-4"></code>
        </pre>
      </div>
    </div>

    <div class="border-b">
      <h2 class="py-2">1.3. Pusher</h2>
    </div>

    <div class="flex my-4">
      <div class="w-1/3 text-grey">
        <p class="py-4 text-black">
          eee.
        </p>
      </div>

      <div class="w-2/3">
        <pre class="w-full" v-highlightjs="pusher">
          <code class="javascript bg-grey-lighter rounded-lg border p-4"></code>
        </pre>
      </div>
    </div>

    <div class="">
      <h1>UI</h1>
    </div>
    <div class="border-b">
      <h2 class="py-2">1. buttons</h2>
    </div>
    <div class="flex my-4">
      <div class="w-1/3">
        <p class="py-4">Buttons come preconfigured with bootstrap like styles. The colors can be edited in <pre>assets/scss/_buttons.scss</pre></p>
        <button class="btn btn-default mr-4">default</button>
        <button class="btn btn-primary mr-4">primary</button>
        <button class="btn btn-success mr-4">success</button>
        <button class="btn btn-warning mr-4">warning</button>
        <button class="btn btn-danger mr-4">danger</button>
      </div>

      <div class="w-2/3">
        <pre class="w-full" v-highlightjs="buttons">
          <code class="javascript bg-grey-lighter rounded-lg border p-4"></code>
        </pre>
      </div>
    </div>

    <div class="border-b">
      <h2 class="py-2">2. Icons</h2>
    </div>
    <div class="flex my-4">
      <div class="w-1/3 text-grey">
        <p class="py-4 text-black">Font Awesome (PRO) is registered as a global component.</p>
        <icon :icon="['fal', 'user']" size="2x" class="mr-4 hover:text-black" />
        <icon :icon="['far', 'user']" size="2x" class="mr-4 hover:text-black"/>
        <icon :icon="['fas', 'user']" size="2x" class="mr-4 hover:text-black"/>

        <icon :icon="['fab', 'facebook']" size="2x" class="mr-4 hover:text-black"/>
        <icon :icon="['fab', 'twitter']" size="2x" class="mr-4 hover:text-black"/>
        <icon :icon="['fab', 'google']" size="2x" class="mr-4 hover:text-black"/>
      </div>

      <div class="w-2/3">
        <pre class="w-full" v-highlightjs="icons">
          <code class="html bg-grey-lighter rounded-lg border p-4"></code>
        </pre>
      </div>
    </div>

    <div class="border-b">
      <h2 class="py-2">3. Select</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example',
  data () {
    return {
      pusher: `
        const channel = this.$pusher.subscribe("chanel")
        channel.bind('event-name', async event => {
          // Do something
        })
      `,
      environment: `
      module.exports = {
        NODE_ENV: '"production"',
        API_URL: '"http://127.0.0.1:8000"',
        PUSHER: {
          KEY: '"xxxxxx"',
          CLUSTER: '"xx"'
        }
      }`,
      buttons: `<button class="btn btn-success" >Button Text</button>`,
      icons: `
        <icon :icon="['fas', 'user']" size="2x"/>
        <icon :icon="['far', 'user']" size="2x"/>
        <icon :icon="['fas', 'user']" size="2x"/>
      `,
      auth: `
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
      `
    }
  },
  mounted () {
    this.$store.dispatch('auth/login', {
      user: 'Ilyas'
    })

    this.$store.dispatch('auth/ready')
  }
}
</script>
