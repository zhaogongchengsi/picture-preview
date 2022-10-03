<script setup lang="ts">
import Contaner from "@/views/layout/index.vue";
import { usePictureList } from "./hook";
import PictureContainer from './components/ImageContainer.vue'

const pictureList= usePictureList();



</script>

<template>
  <Contaner>
    <div class="picture-area">
      <PictureContainer 
        :pictures="pictureList"
        :gap="5"
        :column-count="5"
       />
    </div>
  </Contaner>
</template>

<style lang="scss">
.picture-area {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
}
</style>
