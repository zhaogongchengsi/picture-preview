import { defineStore } from "pinia";

export const useImgs = defineStore("imgs", {
  state() {
    const data = {
      imags: [],
    };

    return {
      data,
    };
  },
});
