<template>
  <div :class="['yhsd-loading', 'yhsd-loading--' + type]">
    <span :class="['yhsd-loading__spinner', 'yhsd-loading__spinner--' + type, 'yhsd-loading__spinner--' + color]"></span>
  </div>
</template>
<script type="text/ecmascript-6">
const VALID_TYPES = ['gradient-circle', 'circle']
const VALID_COLORS = ['black', 'white']

export default {
  name: 'yhsd-loading',

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
