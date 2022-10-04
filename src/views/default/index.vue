<template>
  <div class='home-page'>
    <icon-upload :size="50" />
  </div>
</template>
<script setup lang="ts">
import { IconUpload } from "@arco-design/web-vue/es/icon";
</script>
<style lang="scss">
.isDrop {
  background-color: rgb(52, 54, 53);
}

.home-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
