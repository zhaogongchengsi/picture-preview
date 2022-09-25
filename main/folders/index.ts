import { readdirSync, statSync } from "fs";
import { IMAGE_EXT } from "../apis";
import { join, parse } from "path";
import { FolderInfo } from "../../types";

export function scanFolders(paths: string[], root: string = ""): FolderInfo[] {
  const folderinfo: FolderInfo[] = [];

  for (const path of paths) {
    const basePath = join(root, path);
    const stats = statSync(basePath);
    const isDirectory = stats.isDirectory();

    if (!isDirectory && !isImg(basePath)) {
      continue;
    }

    const info: FolderInfo = {
      type: isDirectory ? "dir" : "file",
      path: basePath,
      stats: stats,
    };

    if (isDirectory) {
      info.content = scanFolders(readdirSync(basePath), basePath);
    }

    folderinfo.push(info);
  }

  return folderinfo;
}

export function isImg(path: string) {
  return IMAGE_EXT.includes(parse(path).ext);
}
