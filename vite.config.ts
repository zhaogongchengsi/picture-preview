import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import { join, resolve } from "path"
// import os from 'os'

export default defineConfig(() => {
  return {
    publicDir: join(process.env.HOME, "Pictures"),
    plugins: [
      vue(),
      Unocss({
        presets: [presetAttributify(), presetUno(), presetIcons()],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve("./src/"),
      },
    },
  };
});
