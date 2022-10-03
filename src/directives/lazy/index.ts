import { App } from "vue";
import { observer } from "./observer";

export interface loadingOptions {
  error?: string;
  timeout?: number;
  loading?: string;
}

const IMG_LOAD_LAZY_NAME = "src";
const IMG_LAZY_COMPONENT_NAME = "AsyncPictureComponent";

export const DATA_SRC = 'data-src'

export function lazy(options?: loadingOptions) {
  return {
    install(app: App) {
      app.directive(IMG_LOAD_LAZY_NAME, {
        mounted(el, binding, vnode) {
          const { value } = binding;
          el.setAttribute(DATA_SRC, value);
          observer(el);
        },
        beforeUpdate(el, binding, vnode, prevVnode) {
          console.log("beforeUpdate");
        },
        updated(el, binding, vnode, prevVnode) {
          console.log("updated");
        },
      });
    },
  };
}
