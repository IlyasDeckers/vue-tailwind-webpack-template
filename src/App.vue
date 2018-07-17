<template>
  <div id="app">
    <router-view :key="$router.fullPpath"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
