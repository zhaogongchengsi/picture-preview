<template>
  <div
    :class="['scroll-container', { 'no-scroll-bar': !props.scroll }]"
    :style="[{ height: props.height }]"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: "100vh",
  },
  scroll: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss">
.scroll-container {
  overflow: auto;
}
</style>
