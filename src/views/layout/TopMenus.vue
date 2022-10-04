<template>
  <div class="top-menus">
    <a-space>
      <a-popover trigger="click">
        <button
          cursor="pointer"
          class="not-darg"
          text="xl gray-500"
          i-mdi="cog-outline"
        />
        <template #content>
          <div w="150px" box="border">
            <div w="full">
              <div class="label">列</div>
              <a-slider
                :default-value="app.setting.columnCount"
                @change="setColumnCount"
                :min="0"
                :max="10"
                :show-ticks="true"
              />
            </div>
            <div w="full">
              <div class="label">间距</div>
              <a-slider
                @change="setGap"
                :default-value="app.setting.gap"
                :min="0"
                :max="10"
                :show-ticks="true"
              />
            </div>
          </div>
        </template>
      </a-popover>
    </a-space>
  </div>
</template>
<script setup lang="ts">
import { usePictureApp } from "../../store";
import { debounce } from "../..//utils/index";
const app = usePictureApp();

const setColumnCount = debounce((value: number) => {
  app.setColumnCount(value);
}, 300);

const setGap = debounce((value: number) => {
  app.setGap(value);
}, 300);
</script>
<style lang="scss">
.top-menus {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
</style>
