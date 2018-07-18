<template>
  <vue-toastr ref="vueToastr"></vue-toastr>
</template>
<script>
import Toast from './Toast'

export default {
  components: {
    'vue-toastr': Toast
  }
}
</script>
