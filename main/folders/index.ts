import { readdir } from "fs/promises";
import { Stats, statSync } from "fs";

export function scanFolders (paths:string[]) {
    return new Promise((res, rej) => {
            Promise.all(
              paths.map((path) => {
                return statSync(path).isDirectory() ? readdir(path) : [path];
              })
            ).then(dirInfos => {
                res(
                  dirInfos.reduce<string[]>((pre, cun) => {
                    return pre.concat(cun);
                  }, [])
                );
            }).catch(rej)
    })
}