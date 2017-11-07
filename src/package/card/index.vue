<template>
  <div :class="['sj-card', {'sj-card--center': centered}]">
    <div class="sj-card__thumb">
      <slot name="thumb">
        <img :src="thumb" class="sj-card__img">
      </slot>
    </div>
    <div class="sj-card__content">
      <slot name="title">
        <div v-if="title || price !== undefined" class="sj-card__row">
          <div v-if="title" class="sj-card__title">{{title}}</div>
          <div v-if="price !== undefined" class="sj-card__price">x {{ price }}</div>
        </div>
      </slot>
      <slot name="desc">
        <div v-if="desc || num !== undefined" class="sj-card__row">
          <div v-if="desc" class="sj-card__desc">{{desc}}</div>
          <div v-if="num !== undefined" class="sj-card__num">x {{ num }}</div>
        </div>
      </slot>
      <slot name="tags"></slot>
    </div>
    <div class="sj-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'sj-card',

  props: {
    thumb: String,
    title: String,
    desc: String,
    num: [Number, String],
    centered: Boolean,
    price: [Number, String]
  }
}
</script>
<style>
</style>
