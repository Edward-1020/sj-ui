<template>
  <transition name="sj-dialog-bounce">
    <div class="sj-dialog" v-show="value">
      <div class="sj-dialog__header" v-if="title" v-text="title"/>
      <div class="sj-dialog__content sj-hairline">
        <slot>
          <div class="sj-dialog__message" v-if="message" :class="{'sj-dialog__message--withtitle': title}" v-html="message"/>
        </slot>
      </div>
      <div class="sj-dialog__footer" :class="{'is-twobtn': showCancelButton && showConfirmButton}">
        <sj-button
          size="large"
          class="sj-dialog__cancel"
          v-show="showCancelButton"
          @click="handleAction('cancel')"
        >
          {{cancelButtonText}}
        </sj-button>
        <sj-button
          size="large"
          :class="['sj-dialog__confirm', {'sj-hairline--left': showCancelButton && showConfirmButton}]"
          v-show="showConfirmButton"
          @click="handleAction('confirm')"
        >
          {{confirmButtonText}}
        </sj-button>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
import Button from '../button'
import Popup from '../mixins/popup'

export default {
  name: 'sj-dialog',

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
      default: true
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
