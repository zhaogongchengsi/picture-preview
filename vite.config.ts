import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";

import { resolve } from "path"

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("./src/"),
    },
  },
});
