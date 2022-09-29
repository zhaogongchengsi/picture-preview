<script setup lang="ts">
import Contaner from "@/views/layout/index.vue";
import { usePictureList } from "./hook";

const [pictureList, open] = usePictureList();



</script>

<template>
  <Contaner>
    <div class="picture-area">
      <button @click="open()">获取图片信息</button>
      <img w="200px" h="200px" v-for="item in pictureList" :src="item.path" alt="">
    </div>
  </Contaner>
</template>

<style lang="scss">
.picture-area {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
}
</style>
