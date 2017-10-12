<template>
  <div class="yhsd-progress">
    <span :class = "['yhsd-progress__portion', {'yhsd-progress__portion--animation': isAnimation}]" ref="portionDom"></span>
  </div>
</template>
<script type="text/ecmascript-6">
const DEFAULT_ISANIMATION = false
const DEFAULT_COLOR = '#f66'
const DEFAULT_DURATION = 1

export default {
  name: 'yhsd-progress',
  data () {
    return {
      timer: null
    }
  },
  props: {
    isAnimation: {
      type: Boolean,
      default: DEFAULT_ISANIMATION
    },
    duration: {
      type: Number,
      default: DEFAULT_DURATION
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    },
    percentage: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    }
  },
  computed: {
    portionStyle () {
      const {isAnimation, duration, color, percentage} = this
      const noAnimation = {
        width: percentage + '%',
        backgroundColor: color
      }
      const hasAnimation = {
        width: percentage + '%',
        backgroundColor: color,
        transition: `width ${duration}s`
      }
      return isAnimation ? hasAnimation : noAnimation
    }
  },
  methods: {
    init () {
      this.timer = setTimeout(() => {
        let portionDom = this.$refs.portionDom
        portionDom.style.width = this.portionStyle.width
        portionDom.style.backgroundColor = this.portionStyle.backgroundColor
        if (this.isAnimation) {
          portionDom.style.transition = this.portionStyle.transition
        }
      }, 0)
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
