import { Stats } from "node:fs";


export interface ImageSize {
    width: number,
    height: number
}

export interface FolderInfo {
  type: "file" | "dir";
  stats: Stats;
  path: string;
  content?: FolderInfo[];
  size?: ImageSize;
}
