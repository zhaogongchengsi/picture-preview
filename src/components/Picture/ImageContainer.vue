<template>
  <div
    class="image-container"
    :style="gridStyle"
  >
    <div
      class="img-item"
      v-for="(img, index) of imgs"
      :key="img"
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
import { computed } from "vue";
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
  renderMode: {
    type: String,
    defaule: "grid"
  }
});
const imgs = usePictures(props.pictures as string[], props.columnCount);
const preview = usePicturePreviewProvide(imgs, props.columnCount);

const gridStyle = computed(() => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnCount}, 1fr)`,
    gap: props.gap + 'px'
  };
});

const cloumnStyle = computed(() => {
  return {
    columnCount: props.columnCount,
    columnGap: props.gap + "px",
  };
});

const prevImg = (img: string) => {
  preview.open(img);
};
</script>
<style lang="scss">
.image-container {
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
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
    height: 100%;
    display: block;
    object-fit:cover;
    transition: all 2s;
  }
}
</style>
