import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

type PlayType = "scroll" | "slide";

export const PLAY_SETTING = 'palySetting'

export const appPlay = defineStore("paly", {
  state() {
    const palyType = ref<PlayType>("scroll");
    const start = ref(false);

    const el = ref<HTMLElement>();

    const setting = useStorage(PLAY_SETTING, {
      depth: 30,
    });

    return {
      palyType,
      start,
      setting,
      el
    };
  },

  actions: {
    play() {
      this.start = true;
    },
    stop() {
      this.start = false;
    },
    setEl (el:any) {
        console.log(el)
        this.el = el
    }
  },
});
