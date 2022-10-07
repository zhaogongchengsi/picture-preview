<template>
  <div class="top-menus">
    <a-space>
      <div class="no-darg" cursor="pointer" @click="app.triggerDark">
        <icon-moon v-if="app.dark" :size="iconSize"  />
        <icon-sun v-else :size="iconSize" />
      </div>
      <a-popover>
        <div class="no-darg" cursor="pointer" >
          <icon-settings :size="iconSize" />
        </div>
        <template #content>
          <div w="150px" box="border">
            <div w="full" display="flex" justify="between">
              <label for="grid">grid</label>
              <input type="radio" name="layout" v-model="app.setting.layout"   value="grid"/>
              <label for="waterfall">waterfall</label>
              <input type="radio" name="layout" v-model="app.setting.layout" value="waterfall" />
            </div>
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
import { IconSun, IconSettings, IconMoon } from "@arco-design/web-vue/es/icon";
const app = usePictureApp();
const setColumnCount = debounce((value: number) => {
  app.setColumnCount(value);
}, 300);
const setGap = debounce((value: number) => {
  app.setGap(value);
}, 300);

const iconSize = 20;

const setDark = () => {
  console.log("dark");
};
</script>
<style lang="scss">
.top-menus {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
</style>
