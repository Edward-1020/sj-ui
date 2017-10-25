<template>
  <div id="app">
    <sj-button bottom-action = "true" type="primary">aaa</sj-button>
    <sj-loading/>
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
