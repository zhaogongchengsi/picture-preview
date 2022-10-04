<template>
  <div class="w-screen h-screen app-bg" :style="{'--top-menu-height': props.headerHeight + 'px'}">
    <div class="header">
      <slot name="header">
            <TopMenu />
      </slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TopMenu from "./TopMenu.vue";
const props = defineProps({
  headerHeight: {
    type: Number,
    default: 30
  }
})
</script>
<style lang="scss">
.main {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
  overflow: auto;
}
.application-container {
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.header {
  height: var(--top-menu-height);
   padding-right: 10px;
  box-sizing: border-box;
  padding-left: 100px;
  -webkit-app-region: drag;

  .not-darg {
    -webkit-app-region: no-drag;
  }
}
</style>
