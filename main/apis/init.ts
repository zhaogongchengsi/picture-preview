import { File, AppEvent } from "./index";
import { ipcMain, app } from "electron";
import { openDir, openFiles } from "./dialog";

export type response = {
    code: number,
    message: string,
    date: any
}

export function addEventOpenFile () {
    return ipcMain.on(File.openFile,  function (event:Electron.IpcMainEvent,path:string) {
       openFiles(path)
         .then((res) => {
           event.reply(File.openFile, res);
         })
         .catch((err) => {
           event.reply(File.openFile, undefined);
         });
    });
}

export function addEventOpenDir () {
        return ipcMain.on(
          File.openDir,
          function (event: Electron.IpcMainEvent, path: string) {
            openDir(path)
              .then((res) => {
                event.reply(File.openDir, res);
              })
              .catch((err) => {
                event.reply(File.openDir, undefined);
              });
          }
        );
}

export function addEventAppClose () {
    return ipcMain.on(AppEvent.close, function () {
        app.quit()
    });
}