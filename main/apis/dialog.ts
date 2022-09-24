import { dialog } from "electron"

export async function openDir (path?:string) {
     return dialog.showOpenDialog({
       title: "请选择图片文件夹",
       defaultPath: path,
       properties: ["openDirectory", "multiSelections"],
       message: "请选择图片文件夹",
     });
}

export async function openFiles(path?: string) {
  return dialog.showOpenDialog({
    title: "请选择图片文件",
    defaultPath: path,
    properties: [
      "openFile",
      "multiSelections",
      "showHiddenFiles",
    ],
    message: "请选择图片",
  });
}