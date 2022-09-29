import { readdirSync, statSync } from "fs";
import { join } from "path";
import { FolderInfo } from "../../types";
import { getImageSize, isImg } from "./image";

export function scanFolders(paths: string[], root: string = ""): FolderInfo[] {
  const folderinfo: FolderInfo[] = [];

  for (const path of paths) {
    const basePath = join(root, path);
    const stats = statSync(basePath);
    const isDirectory = stats.isDirectory();

    

    if (!isDirectory && !isImg(basePath)) {
      continue;
    }

    const size = !isDirectory ? getImageSize(basePath) : undefined

    const info: FolderInfo = {
      type: isDirectory ? "dir" : "file",
      path: basePath,
      stats: stats,
      size,
    };

    if (isDirectory) {
      info.content = scanFolders(readdirSync(basePath), basePath);
    }

    folderinfo.push(info);
  }

  return folderinfo;
}


