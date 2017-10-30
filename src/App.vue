<template>
  <div id="app">
    <sj-button bottom-action = "true" type="primary" @click.native="show = !show">click</sj-button>
    <transition name="fade">
      <sj-button type="primary" v-if="show">aaaaa</sj-button>
    </transition>
  </div>
</template>

<script>
import Button from './package/button'

export default {
  name: 'app',
  data () {
    return {
      show: true
    }
  },
  components: {
    [Button.name]: Button
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
