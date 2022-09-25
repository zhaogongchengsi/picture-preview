import { Stats } from "node:fs";

export interface FolderInfo {
  type: "file" | "dir";
  stats: Stats;
  path: string;
  content?: FolderInfo[];
}
