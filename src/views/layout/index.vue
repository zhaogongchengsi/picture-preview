<template>
  <div
    w="screen"
    h="screen"
    :class="[{'isDrop': isOverDropZone}]"
    :style="{ '--top-menu-height': props.headerHeight + 'px' }"
  >
    <div class="header">
      <slot name="header">
        <div class="defaule-slot-header"></div>
      </slot>
    </div>
    <div class="main no-scroll-bar" ref="dropZoneRef">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDropZone } from "@vueuse/core";
import { ref } from "vue";
import { OnMain } from "../../../channels";
import { useIpcSend } from "../../hook";
const props = defineProps({
  headerHeight: {
    type: Number,
    default: 30,
  },
});

const dropZoneRef = ref<HTMLDivElement>();
const send = useIpcSend(OnMain.ScanImage);
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);

function onDrop(files: File[] | null) {
  send(files?.map((file) => {
    return file.path;
  }));
}

</script>
<style lang="scss">
.main {
  width: 100%;
  height: calc(100vh - var(--top-menu-height));
  overflow: auto;
}

.isDrop {
  background-color: #F3F4F6 !important;
}

.defaule-slot-header {
  height: 100%;
}
.header {
  height: var(--top-menu-height);
  padding-right: 10px;
  box-sizing: border-box;
  padding-left: 100px;
  -webkit-app-region: drag;

  .not-darg {
    -webkit-app-region: no-drag;
  }
}
</style>
