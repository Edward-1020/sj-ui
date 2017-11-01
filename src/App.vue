<template>
  <div id="app">
    <sj-button @click="handleClick" type="default">aaaa</sj-button>
  </div>
</template>

<script>
import Dialog from './package/dialog'
import Button from './package/button'

export default {
  name: 'app',
  methods: {
    handleClick () {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      })
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
