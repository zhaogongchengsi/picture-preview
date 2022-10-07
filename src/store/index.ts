import { defineStore } from "pinia";
import { useDark, useStorage } from "@vueuse/core";
import { usePictureList } from "../hook";
import { computed, watch } from "vue";

export const STORAGE_NAME = "setting"

export const usePictureApp = defineStore("app", {
  state() {
    const pictureList = usePictureList();

    const setting = useStorage(STORAGE_NAME, {
      gap: 8,
      columnCount: 3,
      layout: 'grid'
    });

    const isDark = useDark({
      selector: "body",
      attribute: "arco-theme",
      valueDark: "dark",
      valueLight: "light",
    });

    const isDefultPage = computed(() => {
      return pictureList.value.length > 0;
    });

    return {
      setting,
      pictureList,
      isFirst: isDefultPage,
      dark: isDark,
    };
  },
  actions: {
    setGap(gap: number) {
      this.setting.gap = gap;
    },
    setColumnCount(value: number) {
      this.setting.columnCount = value;
    },
    triggerDark() {
      this.dark = !this.dark
    },
  },
});
