<script setup lang="ts">
import Contaner from "@/views/layout/index.vue";
import { usePictureList } from "./hook";
import PictureContainer from "./components/ImageContainer.vue";
import DefaultPage from './views/default/index.vue'
import ImageRender from "./components/ImageRender.vue";
import { computed } from "vue";
const pictureList = usePictureList();

const isDefultPage = computed(() => {
  return pictureList.value.length > 0
})

</script>

<template>
  <Contaner>
    <div class="picture-area">
      <DefaultPage v-if="!isDefultPage" />
      <PictureContainer v-else :pictures="pictureList" :gap="5" :column-count="2" v-slot="{ picture }" >
        <ImageRender  :src="picture" />
      </PictureContainer>
    </div>
  </Contaner>
</template>

<style lang="scss">
.picture-area {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
}
</style>
