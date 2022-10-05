<template>
  <Teleport to="body">
    <div class="picture-preview-dialog" v-if="props.visible" @click="clickLayer">
      <slot> 123123 </slot>
    </div>
  </Teleport>
</template>
<script setup lang="ts">import { useImagesPreview } from './hooks';

const props = defineProps({
  visible: {
    type: Boolean,
    defaule: false,
  }
});

const pre = useImagesPreview()


const clickLayer = () => {
    pre?.close()
}

</script>
<style lang="scss">
.picture-preview-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#000000, 0.6);
  position:fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
