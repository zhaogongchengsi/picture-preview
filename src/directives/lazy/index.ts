import { App } from "vue";
import { rendererImg } from "./el";
import { observer } from "./observer";

export interface loadingOptions {
  error?: string;
  timeout?: number;
  loading?: string;
}

const IMG_LOAD_LAZY_NAME = "src";

export function lazy(options?: loadingOptions) {
  return {
    install(app: App) {
      app.directive(IMG_LOAD_LAZY_NAME, {
        mounted(el, binding) {
          const { value } = binding;
          el.setAttribute("data-src", value);
          rendererImg(value).then((path) => {
            el.src = path;
          });
          el.stopObserver = observer(el);
        },
        beforeUpdate(el, binding, vnode, prevVnode) {
          console.log("beforeUpdate");
        },
        updated(el, binding, vnode, prevVnode) {
          console.log("updated");
        },
        beforeUnmount(el, binding, vnode, prevVnode) {
          el?.stopObserver();
        },
      });
    },
  };
}
