<template>
  <div v-bind:class="'toast toast-' + data.type" style="display: block;" @click="clicked()" v-on:mouseover="onMouseOver" v-on:mouseout="onMouseOut">
    <toast-progress v-if="progressbar" :data="data" ref="progressBar"></toast-progress>
    <div class="toast-title" v-html="data.title">
    </div>
    <div class="toast-message" v-html="data.msg">
    </div>
  </div>
</template>
<script>
import toastProgress from './ToastrProgress'

export default {
  components: {
    toastProgress
  },
  props: ['data'],
  data () {
    return { progressbar: false, intervalId: false }
  },
  mounted () {
    // console.log("ready", this.data);
  },
  created () {
    // console.log("created", this.data);
    if (typeof this.data.timeout !== 'undefined' && this.data.timeout !== 0) {
      if (this.data.progressbar !== false) {
        this.progressbar = true
      }
      this.setTimeout()
    } else if (this.data.progressBarValue !== null && this.data.progressbar !== false) {
      this.progressbar = true
    }
  },
  watch: {
    data: {
      handler: function (val) {
        this.setProgressBarValue(val.progressBarValue)
      },
      deep: true
    }
  },
  beforeDestroy () {
    this.clearIntervalID()
  },
  methods: {
    clearIntervalID () {
      // console.log(this.intervalId)
      if (this.intervalId !== false) {
        clearInterval(this.intervalId)
      }
      this.intervalId = false
    },
    // Enter Hover
    onMouseOver () {
      // console.log("onMouseOver")
      if (typeof this.data.onMouseOver !== 'undefined') {
        this.data.onMouseOver()
      }
      if (!this.data.closeOnHover) {
        this.clearIntervalID()
      }
    },
    // Leave Hover
    onMouseOut () {
      // console.log("onMouseOut")
      if (typeof this.data.onMouseOut !== 'undefined') {
        this.data.onMouseOut()
      }
      if (!this.data.closeOnHover) {
        this.setTimeout()
      }
    },
    // Set timeout to close
    setTimeout () {
      // console.log("setTimeout")
      this.intervalId = setTimeout(() => {
        this.close()
      }, this.data.timeout)
      // console.log(this.data.intervalId)
    },
    // Set progress bar value if manually managed
    setProgressBarValue (newValue) {
      if (this.data.progressBarValue !== null) {
        this.$refs.progressBar.setValue(newValue)
      }
    },
    // Clicked Toast
    clicked () {
      if (typeof this.data.onClicked !== 'undefined') {
        this.data.onClicked()
      }
      this.cclose()
    },
    // Click Close?
    cclose () {
      if (typeof this.data.clickClose !== 'undefined' && this.data.clickClose === false) {
        return
      }
      this.close()
    },
    // Close Toast
    close () {
      // console.log(typeof this.$parent, this);
      // if toast not manuel closed.
      if (this.$parent != null) {
        this.$parent.Close(this.data)
      }
    }
  }
}
</script>
