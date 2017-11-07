<template>
  <div id="app">
    <sj-badge-group :activeKey="num">
      <sj-badge title="热销榜" @click="num = 0"></sj-badge>
      <sj-badge title="花式寿司" @click="num = 1" info="8"></sj-badge>
      <sj-badge title="火炽寿司" @click="num = 2" info="99"></sj-badge>
      <sj-badge title="手握寿司" @click="num = 3" info="199"></sj-badge>
    </sj-badge-group>
  </div>
</template>

<script>
import Badge from './package/badge'
import BadgeGroup from './package/badge-group'

export default {
  name: 'app',
  data () {
    return {
      num: 0
    }
  },
  components: {
    [Badge.name]: Badge,
    [BadgeGroup.name]: BadgeGroup
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
