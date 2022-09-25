import { readdir } from "fs/promises";
import { statSync } from "fs";
import { IMAGE_EXT } from "../apis";
import { parse } from "path";

export function scanFolders (paths:string[]) {
    return new Promise((res, rej) => {
            Promise.all(
              paths.map((path) => {
                return statSync(path).isDirectory() ? readdir(path) : [path];
              })
            ).then(dirInfos => {
                res(
                  dirInfos
                    .reduce<string[]>((pre, cun) => {
                      return pre.concat(cun);
                    }, [])
                    .filter(isImg)
                );
            }).catch(rej)
    })
}

export function isImg (path:string) {
    return IMAGE_EXT.includes(parse(path).ext);
}