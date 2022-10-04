<template>
  <div :class="['home-page', { isDrop: isOverDropZone }]" ref="dropZoneRef">
    <icon-upload :size="50" />
  </div>
</template>
<script setup lang="ts">
import { IconUpload } from "@arco-design/web-vue/es/icon";
import { useDropZone } from "@vueuse/core";
import { ref } from "vue";
import { OnMain } from "../../../channels";
import { useIpcSend } from "../../hook/electron";
const dropZoneRef = ref<HTMLDivElement>();
const send = useIpcSend(OnMain.ScanImage)
function onDrop(files: File[] | null) {
  const paths = files?.map(file => {
    return file.path
  })
  send(paths)
}
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>
<style lang="scss">
.isDrop {
  background-color: rgb(52, 54, 53);
}

.home-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
