<template>
  <div class="picture-area">
    <DefaultPage v-if="!isDefultPage" />
    <PictureContainer
      v-else
      :pictures="pictureList"
      :gap="5"
      :column-count="2"
      v-slot="{ picture }"
    >
      <PictureRender :src="picture" />
    </PictureContainer>
  </div>
</template>
<script setup lang="ts">
import { usePictureList } from "../../hook";
import {
  PictureContainer,
  PictureRender,
} from "../../components/Picture/index";
import DefaultPage from "../default/index.vue";
import { computed } from "vue";
const pictureList = usePictureList();

const isDefultPage = computed(() => {
  return pictureList.value.length > 0;
});
</script>
<style lang="scss">
.picture-area {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
}
</style>
