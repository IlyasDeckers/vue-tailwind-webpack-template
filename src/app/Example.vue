<template>
  <div class="m-8">
    <h1>Vue.JS Boilerplate</h1>
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

    <div class="border-b">
      <h2 class="py-2">4. Authentication</h2>
    </div>

    <div class="border-b">
      <h2 class="py-2">5. Http requests</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example',
  data () {
    return {
      buttons: `<button class="btn btn-success" >Button Text</button>`,
      icons: `
        <icon :icon="['fas', 'user']" size="2x"/>
        <icon :icon="['far', 'user']" size="2x"/>
        <icon :icon="['fas', 'user']" size="2x"/>
      `
    }
  }
}
</script>
