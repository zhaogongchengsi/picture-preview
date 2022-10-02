/**
 *
 * @param el
 * @param arrtName
 * @returns
 * @todo !!! 搜索不到 bug 一会修
 */
export function searchParentAttribute(el: Element, arrtName: string) {
  const parent = el.parentNode;
  if (!parent) {
    return undefined;
  }
  //   return searchParentAttribute(parent);
}

export function loadImg(src: string): Promise<string> {
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(src);
    img.onerror = reject;
    img.src = src;
  });
}

const pictureCaching = new Map<string, string>();

export async function rendererImg(src: string) {
  let img = pictureCaching.get(src);
  if (img) {
    return img;
  }

  try {
    img = await loadImg(src);
  } catch (err) {
    console.error(`${src} Loading failed`);
    throw err;
  }

  pictureCaching.set(src, img);
  return img;
}

export function getPictureCaching() {
  return pictureCaching;
}
