<template>
  <div>
    <p>Example Page</p>
    <icon :icon="['fas', 'user']" size="2x" />
    <div>
      <pre class="w-1/2 bg-grey-lighter rounded-lg border" v-highlightjs>
        <code class="javascript bg-grey-lighter">
          export default {
            components: {
              FontAwesomeIcon
            },
            props: {
              size: {
                type: String,
                default: '1x'
              },
              icon: {
                type: Array,
                required: true
              }
            }
          }
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example'
}
</script>
