import { rendererImg } from "../../el";
import { DATA_SRC } from '.'

export function observer(el: HTMLImageElement, rootEl?: HTMLElement | HTMLBodyElement) {
  var intersectionObserver = new IntersectionObserver(
    ([entrie]) => {
      if (!entrie.isIntersecting) {
        return;
      }
      const path = el.dataset.src ?? '';
      rendererImg(path).then((path) => {
        el.src = path;
        el.removeAttribute(DATA_SRC);
        intersectionObserver.unobserve(el);
      });
    },
    {
      rootMargin: "0px",
      threshold: 0,
    }
  );

  intersectionObserver.observe(el);
}
