<template>
  <div id="app">
    <yhsd-button size="mini">aaaaa</yhsd-button>
  </div>
</template>

<script>
import Button from './package/button'

export default {
  name: 'app',
  components: {
    [Button.name]: Button
  }
}
</script>

<style>
</style>
