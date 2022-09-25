import { Stats } from "node:fs";


export interface FolderInfo {
  type: "file" | "dir";
  Stats: Stats;
  path: string;
  content?: FolderInfo;
}
