<template>
  <transition name="yhsd-dialog-bounce">
    <div class="yhsd-dialog" v-show="value">
      <div class="yhsd-dialog__header" v-if="title" v-text="title"/>
      <div class="yhsd-dialog__content yhsd-hairline">
        <slot>
          <div class="yhsd-dialog__message" v-if="message" :class="{'yhsd-dialog__message--withtitle': title}" v-html="message"/>
        </slot>
      </div>
      <div class="yhsd-dialog__footer" :class="{'is-twobtn': showCancelButton && showConfirmButton}">
        <yhsd-button
          size="large"
          class="yhsd-dialog__cancel"
          v-show="showCancelButton"
          @click="handleAction('cancel')"
        >
          {{cancelButtonText}}
        </yhsd-button>
        <yhsd-button
          size="large"
          :class="['yhsd-dialog__confirm', {'yhsd-hairline--left': showCancelButton && showConfirmButton}]"
          v-show="showConfirmButton"
          @click="handleAction('confirm')"
        >
          {{confirmButtonText}}
        </yhsd-button>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
import Button from '../button'
import Popup from '../mixins/popup'

export default {
  name: 'yhsd-dialog',

  components: {
    [Button.name]: Button
  },

  mixins: [Popup],

  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    showConfirmButton: {
      type: Boolean,
      dafault: false
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    callback: {
      type: Function
    },
    overlay: {
      default: true
    },
    closeOnClickOverlay: {
      default: false
    },
    lockOnScroll: {
      default: true
    }
  },

  methods: {
    handleAction (action) {
      this.$emit('input', false)
      this.$emit(action)
      this.callback && this.callback(action)
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
