<template>
  <div id="app">
    <sj-card
      title="商品名称"
      desc="商品描述"
      num="2"
      price="2.00"
      :thumb="`http://image.jiantuku.com/17-7-20/70601538.jpg?imageView2/1/w/200/h/200&e=1510135210&token=el7kgPgYzpJoB23jrChWJ2gV3HpRl0VCzFn8rKKv:9KpeGc-0VbtGe6Vl-NiNwWoyi-s=`"
    />
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
