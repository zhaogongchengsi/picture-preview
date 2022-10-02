import { app, dialog, ipcMain, nativeImage } from "electron";
import { readdirSync, statSync } from "fs";
import { join, parse } from "path";
import { OnMain } from "../channels";
import { ImageSize } from "../types";
import { Agreement } from "./apis";

export type ImageCache = Map<string, string>;

class ScanImages {
  private imageCache: ImageCache = new Map();
  private ScannedImage: ImageCache = new Map();

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

    isImg(path: string) {
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

  dialog(path?: string): Promise<string[]> {
    return new Promise((res, rej) => {
      dialog
        .showOpenDialog({
          title: "请选择图片文件",
          defaultPath: path,
          filters: [
            {
              name: "image",
              extensions: ScanImages.IMAGE_EXT,
            },
          ],
          properties: [
            "openFile",
            "multiSelections",
            "openDirectory",
            "showHiddenFiles",
          ],
          message: "请选择图片",
        })
        .then((file) => {
          if (file.canceled) {
            rej(false);
            return;
          }
          res(file.filePaths);
        })
        .catch(rej);
    });
  }

  private scanHandler() {}

  private getImgSizeHandler () {}

  private isSvg(path:string) {
      if (!this.isImg(path)) {
        return false;
      }
      const ext = parse(path).ext;
      if (ext === "") return false;
      return ext === ".svg" ? true : false;
  }

  private getImageSize(path: string): ImageSize {
    if (this.isSvg(path)) {
      return { width: 400, height: 400 };
    }

    const image = nativeImage.createFromPath(path);
    if (image.isEmpty()) {
      return { width: 0, height: 0 };
    }

    return image.getSize();
  }

  private quit() {
    this.ScannedImage.clear();
    this.imageCache.clear();
    ipcMain.removeAllListeners();
    app.removeAllListeners();
  }

  listen() {
    ipcMain.on(OnMain.ScanImage, this.scanHandler.bind(this));
    ipcMain.on(OnMain.GetImageSize, this.getImgSizeHandler.bind(this));
    app.on("quit", this.quit.bind(this));
  }

  set pictures(value: any) {
    throw new Error(`The pictures property is readable`);
  }

  get pictures() {
    const res: string[] = [];
    this.ScannedImage.forEach((value) => {
      res.push(value);
    });
    this.ScannedImage.clear();
    return res;
  }
}

export default new ScanImages();
