<template>
  <a :class="['sj-cell', 'sj-hairline', {'sj-cell-required': required}]" :href="url" @click="$emit('click')">
    <div
      v-if="$slots.title || title"
      class="sj-cell__title"
    >
      <slot name="icon">
        <i v-if="icon" class="sj-icon" :class="'sj-icon-' + icon"></i>
      </slot>
      <slot name="title">
        <span class="sj-cell__text" v-text="title"></span>
        <span class="sj-cell__label" v-if="label" v-text="label"></span>
      </slot>
    </div>
    <div
      class="sj-cell__value"
      v-if="value || $slots.default"
      :class="{
        'sj-cell__value--link': isLink,
        'sj-cell__value--alone': !$slots.title && !title && !label
      }"
    >
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>
    <slot name="right-icon">
      <i class="sj-cell__right-icon sj-icon sj-icon-arrow" v-if="isLink"></i>
    </slot>
    <slot name="extra"></slot>
  </a>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'sj-cell',

  props: {
    icon: String,
    title: String,
    value: [String, Number],
    url: String,
    label: String,
    isLink: Boolean,
    required: Boolean
  }
}
</script>
<style>
</style>
