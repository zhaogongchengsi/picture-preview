import { App } from "vue";
import lazyDir, { IMG_LOAD_LAZY_NAME, loadingOptions } from "./lazy";

export function lazy(options?: loadingOptions) {
  return {
    install(app: App) {
      app.directive(IMG_LOAD_LAZY_NAME, lazyDir)
    },
  };
}
export { lazyDir, IMG_LOAD_LAZY_NAME };