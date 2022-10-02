import { readdirSync, statSync } from "fs";
import { join } from "path";
import { FolderInfo } from "../../types";
import { openImagesFile } from "../apis/dialog";
import { Agreement } from "../apis/init";
import { getImageSize, isImg } from "./image";


export const ImageCache = new Map<string, string>()

export function scanFolders(
  paths: string[],
  root: string = "",
  agreement: Agreement
): FolderInfo[] {
  const folderinfo: FolderInfo[] = [];

  for (const path of paths) {
    const basePath = join(root, path);
    const stats = statSync(basePath);
    const isDirectory = stats.isDirectory();

    if (!isDirectory && !isImg(basePath)) {
      continue;
    }

    // const size = !isDirectory ? getImageSize(basePath) : undefined;

    const info: FolderInfo = {
      type: isDirectory ? "dir" : "file",
      path: isDirectory ? basePath : agreement + basePath,
      stats: stats,
      // size,
    };

    if (isDirectory) {
      info.content = scanFolders(readdirSync(basePath), basePath, agreement);
    }

    ImageCache.set(basePath, basePath);

    folderinfo.push(info);
  }

  return folderinfo;
}


export function scanImages(
  path?: string,
  agreement: Agreement = "file://"
): Promise<FolderInfo[]> {
  return new Promise((res, rej) => {
    openImagesFile(path)
      .then(async (scanInfo) => {
        res(scanFolders(scanInfo, "", agreement));
      })
      .catch(rej);
  });
}