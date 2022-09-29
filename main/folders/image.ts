import { nativeImage } from "electron";
import { parse } from "path";
import { ImageSize } from "../../types";
import { IMAGE_EXT } from "../apis";

export function getImageSize(path: string): ImageSize {
  if (isSvg(path)) {
    return { width: 400, height: 400 };
  }

  const image = nativeImage.createFromPath(path);
  if (image.isEmpty()) {
    return { width: 0, height: 0 };
  }

  return image.getSize();
}

export function isImg(path: string) {
  return IMAGE_EXT.includes(parse(path).ext);
}

export function isSvg(path: string) {
  if (!isImg(path)) {
    return false;
  }
  const ext = parse(path).ext
  if (ext === '') return false;
  return ext === ".svg" ? true : false;
}
