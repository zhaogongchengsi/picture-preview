<template>
  <Teleport to="body">
    <div
      class="picture-preview-dialog"
      v-if="props.visible"
      @click="clickLayer"
    >
      <slot>
        <div class="preview-img">
          <img :src="currentImg" alt="" />
        </div>
        <button class="button" @click.stop="next">下一个</button>
        <button class="button" @click.stop="prev">上一个</button>
      </slot>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useImagesPreview } from "./hooks";

const props = defineProps({
  visible: {
    type: Boolean,
    defaule: false,
  },
});

const pre = useImagesPreview();

const currentImg = computed(() => {
  return pre?.previewState.pictures[pre.previewState.CurrentPrevieImage];
});

const clickLayer = () => {
  pre?.close();
};

const prev = () => {
    pre?.prev()
    
}

const next = () => {
    pre?.next()
}

</script>
<style lang="scss">
.picture-preview-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#000000, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  flex-direction: column;
}

.preview-img {
  width: 500px;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.button {
    background-color: aliceblue;
    color: #333;
}
</style>
