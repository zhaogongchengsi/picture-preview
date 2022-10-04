<template>
  <div class="picture-area">
    <DefaultPage v-if="!pictureApp.isFirst" />
    <PictureContainer
      v-else
      :pictures="pictureApp.pictureList"
      :gap="pictureApp.setting.gap"
      :column-count="pictureApp.setting.columnCount"
      v-slot="{ picture }"
    >
      <PictureRender :src="picture" />
    </PictureContainer>
  </div>
</template>
<script setup lang="ts">
import {
  PictureContainer,
  PictureRender,
} from "../../components/Picture/index";
import DefaultPage from "../default/index.vue";
import { usePictureApp } from "../../store";
const pictureApp = usePictureApp();

</script>
<style lang="scss">
.picture-area {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
}
</style>
