import { dialog } from "electron"
import { IMAGE_EXT } from '.'

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


export async function openImagesFile(path?:string) :Promise<string[]> {
  return new Promise((res, rej) => {
       dialog
         .showOpenDialog({
           title: "请选择图片文件",
           defaultPath: path,
           filters: [
             {
               name: "image",
               extensions: IMAGE_EXT,
             },
           ],
           properties: [
             "openFile",
             "multiSelections",
             "openDirectory",
             "showHiddenFiles",
           ],
           message: "请选择图片",
         })
         .then((file) => {
           if (file.canceled) {
             rej(false);
             return;
           }
           res(file.filePaths);
         })
         .catch(rej);
  })

}