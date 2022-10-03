import { App } from "vue";
import { observer } from "./observer";

export interface loadingOptions {
  error?: string;
  timeout?: number;
  loading?: string;
}

export const IMG_LOAD_LAZY_NAME = "src";

export const DATA_SRC = 'data-src'


export default {
  // @ts-ignore
  mounted(el, binding, vnode) {
    const { value } = binding;
    el.setAttribute(DATA_SRC, value);
    observer(el);
  },
  // beforeUpdate(el, binding, vnode, prevVnode) {
  //   console.log("beforeUpdate");
  // },
  // updated(el, binding, vnode, prevVnode) {
  //   console.log("updated");
  // },
};