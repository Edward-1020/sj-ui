<template>
  <div id="app">
  </div>
</template>

<script>
import Card from './package/card'

export default {
  name: 'app',
  data () {
    return {
      num: 0
    }
  },
  components: {
    [Card.name]: Card
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
