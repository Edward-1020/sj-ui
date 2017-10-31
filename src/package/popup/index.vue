<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="sj-popup" :class="[position ? 'sj-popup--' + position : '']">
      <slot></slot>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
import Popup from '../mixins/popup'

export default {
  name: 'sj-popup',

  mixins: [Popup],

  props: {
    overlay: {
      default: true
    },

    lockOnScroll: {
      default: false
    },

    closeOnClickOverlay: {
      default: true
    },

    transition: {
      type: String,
      default: 'popup-slide'
    },

    position: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      currentValue: false,
      currentTransition: this.transition
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val)
    },

    value (val) {
      this.currentValue = val
    }
  },

  beforeMount () {
    if (this.transition !== 'popup-fade') {
      this.currentTransition = `popup-slide-${this.position}`
    }
  },

  mounted () {
    if (this.value) {
      this.currentValue = true
      this.open()
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
