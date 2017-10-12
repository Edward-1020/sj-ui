<template>
  <div id="app">
    <yhsd-count-down :time="30">
    </yhsd-count-down>
  </div>
</template>

<script>
import yhsdCountDown from './package/countDown'

export default {
  name: 'app',
  components: {
    yhsdCountDown
  }
}
</script>

<style>
</style>
