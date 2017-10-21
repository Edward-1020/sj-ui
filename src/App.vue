<template>
  <div id="app">
    <yhsd-loading/>
  </div>
</template>

<script>
import Loading from './package/loading'

export default {
  name: 'app',
  components: {
    [Loading.name]: Loading
  }
}
</script>

<style>
</style>
