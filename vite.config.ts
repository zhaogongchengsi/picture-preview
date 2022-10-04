import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { createStyleImportPlugin } from "vite-plugin-style-import";
import { resolve } from "path"

export default defineConfig(() => {

  return {
    plugins: [
      vue(),
      Unocss({
        presets: [presetAttributify(), presetUno(), presetIcons()],
      }),
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true,
          }),
        ],
      }),
      createStyleImportPlugin({
        libs: [
          {
            libraryName: "@arco-design/web-vue",
            esModule: true,
            resolveStyle: (name) => {
              // css
              return `@arco-design/web-vue/es/${name}/style/css.js`;
              // // less
              // return `@arco-design/web-vue/es/${name}/style/index.js`;
            },
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve("./src/"),
      },
    },
  };
});
