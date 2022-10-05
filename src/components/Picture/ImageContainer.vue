<template>
  <div
    class="image-container"
    :style="{ columnCount: props.columnCount, columnGap: props.gap + 'px' }"
  >
    <div
      class="img-item"
      v-for="(img, index) of imgs"
      :key="img"
      :style="{ marginBottom: props.gap + 'px' }"
      @click="prevImg(img)"
    >
        <slot :picture="imgs" :src="img" :ranking="index">
          <div>
            <img v-src="img" src="" :alt="img" />
          </div>
        </slot>
    </div>
  </div>
  <previw-dialog :visible="preview.previewState.previeDialogVisible" />
</template>
<script setup lang="ts">
import { usePicturePreviewProvide, usePictures } from "./hooks";
import PreviwDialog from "./PreviwDialog.vue";

const props = defineProps({
  pictures: {
    type: Array,
    defaule: () => [],
  },
  gap: {
    type: Number,
    default: 10,
  },
  columnCount: {
    type: Number,
    default: 5,
  },
  loadNow: {
    type: Number,
    default: 20,
  },
});
const imgs = usePictures(props.pictures as string[], props.columnCount)
const preview =  usePicturePreviewProvide(imgs)

const prevImg = (img:string) => {
  preview.open(img)
}

</script>
<style lang="scss">
.image-container {
  padding: 5px;
  box-sizing: border-box;
  width: 100%;

  // [data-src] {
  //   min-height: 200px;
  //   background-color: rgb(236, 196, 196);
  // }
}

.img-item {
  overflow: hidden;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.5);
    }
  }

  img {
    width: 100%;
    // height: 100%;
    display: block;
    object-fit: cover;
    transition: all 2s;
  }
}
</style>
