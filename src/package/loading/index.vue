<template>
  <div :class="['sj-loading', 'sj-loading--' + type]">
    <span :class="['sj-loading__spinner', 'sj-loading__spinner--' + type, 'sj-loading__spinner--' + color]"></span>
  </div>
</template>
<script type="text/ecmascript-6">
const VALID_TYPES = ['gradient-circle', 'circle']
const VALID_COLORS = ['black', 'white']

export default {
  name: 'sj-loading',

  props: {
    type: {
      type: String,
      default: 'gradient-circle',
      validator: value => VALID_TYPES.indexOf(value) > -1
    },
    color: {
      type: String,
      default: 'black',
      validator: value => VALID_COLORS.indexOf(value) > -1
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
