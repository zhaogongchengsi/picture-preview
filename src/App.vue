<script setup lang="ts">
import Contaner from "@/views/layou/index.vue"
import { useIpcRenderer } from './hook'
const ipcRenderer = useIpcRenderer()





</script>

<template>
  <Contaner>
    <div class="picture-area">图片列表</div>
  </Contaner>
</template>

<style lang="scss">

.picture-area {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
  background-color: pink;
}

</style>

