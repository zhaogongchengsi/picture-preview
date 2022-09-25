import { readdirSync, statSync } from "fs";
import { IMAGE_EXT } from "../apis";
import { join, parse } from "path";
import { FolderInfo } from "../../types";

// export function scanFolders (paths:string[]) {
//     return new Promise((res, rej) => {
//             Promise.all(
//               paths.map((path) => {
//                 return statSync(path).isDirectory() ? readdir(path) : [path];
//               })
//             ).then(dirInfos => {
//                 res(
//                   dirInfos
//                     .reduce<string[]>((pre, cun) => {
//                       return pre.concat(cun);
//                     }, [])
//                     .filter(isImg)
//                 );
//             }).catch(rej)
//     })
// }

export function scanFolders(paths: string[], root: string = ""): FolderInfo[] {
  const folderinfo: FolderInfo[] = [];

  for (const path of paths) {
    const basePath = join(root, path);
    const stats = statSync(basePath);
    const isDirectory = stats.isDirectory();
    
    if (!isDirectory && !isImg(basePath)) {
      continue;
    }

    folderinfo.push({
      type: isDirectory ? "dir" : "file",
      path: basePath,
      stats: stats,
      content: isDirectory
        ? scanFolders(readdirSync(basePath), basePath)
        : undefined,
    });
  }

  return folderinfo;

  // return paths.map(path => {
  //   const basePath = join(root, path)
  //   const stats = statSync(basePath)
  //   const isDirectory = stats.isDirectory();

  //   return {
  //     type: isDirectory ? "dir" : "file",
  //     path: basePath,
  //     stats: stats,
  //     content: isDirectory ? scanFolders(readdirSync(path), path) : undefined,
  //   };
  // })
}

export function isImg(path: string) {
  return IMAGE_EXT.includes(parse(path).ext);
}
