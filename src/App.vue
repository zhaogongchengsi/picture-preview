<script setup lang="ts">
import Contaner from "@/views/layou/index.vue";
import { useFileDialog } from "@vueuse/core";
import { usePictureList } from "./hook";

const [pictureList, open] = usePictureList();

const createImg = () => {
  const image = new Image()
  image.src = 'file:///Users/wuliuqi/Pictures/ww/2022-08-11_23-58-34_067.jpg',
  image.onload = (e) => {
      console.log('加载成功')
  }
  image.onerror = (e) =>{
    console.log(e)
  }
}

</script>

<template>
  <Contaner>
    <div class="picture-area">
      <button @click="open()">获取图片信息</button>
      <button @click="createImg">创建图片</button>
      <!-- <img
        src="/Users/wuliuqi/Pictures/ww/2022-08-11_23-58-34_067.jpg"
        alt=""
      /> -->
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
