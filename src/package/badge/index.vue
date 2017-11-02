<template>
  <a :class="['sj-badge sj-hairline', {'sj-badge--select': isSelect}]" :href="url" @click="onClick">
    <div v-if="info" class="sj-badge__info">{{info}}</div>
    {{title}}
  </a>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'sj-badge',

  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: 'javascript:;'
    },
    info: {
      type: String
    }
  },

  beforeCreate () {
    this.$parent.badges.push(this)
  },

  computed: {
    isSelect () {
      const parent = this.$parent
      return parent.badges.indexOf(this) === parent.activeKey
    }
  },

  methods: {
    onClick () {
      this.$emit('click', this.$parent.badges.indexOf(this))
    }
  }
}
</script>
<style>
</style>
