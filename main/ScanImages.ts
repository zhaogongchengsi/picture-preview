import { readdirSync, statSync } from "fs";
import { join, parse } from "path";
import { Agreement } from "./apis/init";

export type ImageCache = Map<string, string>;

class ScanImages {
  private imageCache: ImageCache = new Map();
  private ScannedImage: ImageCache = new Map();

  private isNewPicture: boolean = true;

  static readonly IMAGE_EXT = [
    ".png",
    ".jpeg",
    ".jpg",
    // ".svg",
    ".jfif",
    ".pjpeg",
    ".pjp",
    ".apng",
    ".webp",
    ".avif",
    ".bmp",
    ".gif",
    ".ico",
    ".cur",
  ];
  constructor() {}

  private isImg(path: string) {
    return ScanImages.IMAGE_EXT.includes(parse(path).ext);
  }

  private scanFolders(
    paths: string[],
    root: string = "",
    agreement: Agreement
  ) {
    for (const path of paths) {
      const basePath = join(root, path);
      const stats = statSync(basePath);
      const isDirectory = stats.isDirectory();

      if (!isDirectory && !this.isImg(basePath)) {
        continue;
      }

      if (isDirectory) {
        this.scanFolders(readdirSync(basePath), basePath, agreement);
        continue;
      }

      const filePath = agreement + basePath;
      if (this.imageCache.has(filePath)) {
        continue;
      }

      this.ScannedImage.set(filePath, filePath);
      this.imageCache.set(filePath, filePath);
    }
  }

  scan(paths: string[], root: string = "", agreement: Agreement = "file://") {
    this.scanFolders(paths, root, agreement);
  }

  set pictures(value: any) {
    throw new Error(`The pictures property is readable`);
  }

  get pictures() {
    const res: string[] = [];

    if (this.ScannedImage.size < 1) {
      return [];
    }

    this.ScannedImage.forEach((value) => {
      res.push(value);
    });

    this.ScannedImage.clear();

    return res;
  }
}

export default new ScanImages();
