<template>
  <div class="w-screen h-screen bg-white dark:bg-black">
    <TopMenu />
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TopMenu from "./TopMenu.vue";
</script>
<style>
.main {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
}
</style>
