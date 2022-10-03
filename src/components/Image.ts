import { defineComponent, h, resolveDirective, withDirectives } from "vue";
import { rendererImg } from "../el";

export default defineComponent({
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: String,
    },
  },
  async setup(props) {
    const vSrcDir = resolveDirective("src");
    const src = await rendererImg(props.src);
    const render = () => h("img", { src, alt: props.src });
    if (vSrcDir) return () => withDirectives(render(), [[vSrcDir, props.src]]);
    else return render;
  },
});
