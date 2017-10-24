<template>
  <div id="app">
    <yhsd-button bottom-action = "true" type="primary">aaa</yhsd-button>
    <yhsd-loading/>
  </div>
</template>

<script>
import Button from './package/button'
import Loading from './package/loading'

export default {
  name: 'app',
  components: {
    [Button.name]: Button,
    [Loading.name]: Loading
  }
}
</script>

<style>
</style>
