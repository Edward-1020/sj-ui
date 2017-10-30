<template>
  <div id="app">
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
