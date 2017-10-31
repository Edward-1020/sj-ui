<template>
  <div id="app">
    <sj-button @click="show = true"></sj-button>
    <sj-popup v-model="show">
      <sj-button>aaaaa</sj-button>
    </sj-popup>
  </div>
</template>

<script>
import Popup from './package/popup'
import Button from './package/button'

export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  },
  components: {
    [Popup.name]: Popup,
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
