import { Stats } from "node:fs";

export interface FolderStats extends Stats {}

export interface ImageSize {
    width: number,
    height: number
}

export interface FolderInfo {
  type: "file" | "dir";
  stats: FolderStats;
  path: string;
  content?: FolderInfo[];
  size?: ImageSize;
}
