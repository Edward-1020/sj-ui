<template>
  <span>
    <slot name="countDown" :time="fmtDate">
      <span class="yhsd-count-down">
        {{`${fmtDate.d}天${fmtDate.h}时${fmtDate.m}分${fmtDate.s}秒`}}
      </span>
    </slot>
  </span>
</template>
<script type="text/ecmascript-6">
const DEFAULT_TIME = 0

export default {
  name: 'yhsd-count-down',
  data () {
    return {
      countDownPreTimer: null,
      countDownNowTimer: null,
      selfTime: this.time
    }
  },
  props: {
    time: {
      type: Number,
      default () {
        return DEFAULT_TIME
      }
    }
  },
  computed: {
    fmtDate () {
      const _leftPad = function (num, len = 2, ch = 0) {
        if (num <= 0) {
          num = 0
        }
        num = num + ''
        let i = -1
        len -= num.length
        while (++i < len) {
          num = ch + num
        }
        return num
      }
      let _time = this.selfTime
      let t = {}
      t.s = _leftPad(Math.floor(_time % 60))
      _time = _leftPad(Math.floor(_time / 60))
      t.m = _leftPad(Math.floor(_time % 60))
      _time = _leftPad(Math.floor(_time / 60))
      t.h = _leftPad(Math.floor(_time % 24))
      t.d = (Math.floor(_time / 24))
      return t
    }
  },
  methods: {
    doRun () {
      this.countDownNowTimer = setTimeout(() => {
        this.selfTime -= 1
        this.doRun()
        clearTimeout(this.countDownPreTimer)
        this.countDownPreTimer = this.countDownNowTimer
      }, 1000)
    }
  },
  mounted () {
    this.doRun()
  },
  destroyed () {
    clearTimeout(this.countDownNowTimer)
  }
}
</script>
<style>
</style>
