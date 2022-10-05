/**
 *
 * @param el
 * @param arrtName
 * @returns
 * @todo !!! 搜索不到 bug 一会修
 */
export function getAttribute(el: Element, arrtName: string) {
  

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


export function fileReader (path:string) {
  const reader = new FileReader();
  return new Promise((res, rej) => {
      reader.onload = (evt) => {
        if (evt.target) res(evt.target.result)
        else rej()
      };
      reader.onerror = (err) => rej(err)
  })
}

export function createObjectURL (url:string) {


}