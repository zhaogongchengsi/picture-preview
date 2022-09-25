<script setup lang="ts">
import Contaner from "@/views/layou/index.vue";
import { useFileDialog } from '@vueuse/core'
import { usePictureList } from "./hook";

const [pictureList, open] = usePictureList();


</script>

<template>
  <Contaner>
    <button @click="open()">获取图片信息</button>
    <div class="picture-area">
        <img v-for="item in pictureList" :src="item" alt="">
    </div>
  </Contaner>
</template>

<style lang="scss">
.picture-area {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
  background-color: pink;
}
</style>
