<template>
  <div class="w-screen h-screen app-bg">
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
.application-container {
background: rgba( 0, 0, 0, 0.9 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 18px );
-webkit-backdrop-filter: blur( 18px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>
