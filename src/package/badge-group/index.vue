<template>
  <div class="sj-badge-group sj-hairline--top-bottom">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'sj-badge-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  data () {
    return {
      badges: []
    }
  }
}
</script>
<style>
</style>
