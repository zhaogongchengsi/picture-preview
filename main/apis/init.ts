import { AppEvent } from "./index";
import { ipcMain, app } from "electron";
import { scanImages } from "../folders";
import { OnMain, OnRenderer } from "../../channels";

export type Agreement = "file://" | "http://" | "https://";

export function addEventOpenDir() {
  return ipcMain.on(
    OnMain.ScanImage,
    function (
      event: Electron.IpcMainEvent,
      path: string,
      agreement: Agreement = "file://"
    ) {
      scanImages(path,agreement).then(res => {
        event.reply(OnRenderer.FileSelected, res)
      }).catch(err => {
        event.reply(OnRenderer.FileSelected, undefined);
      })
    }
  );
}

export function addEventAppClose() {
  return ipcMain.on(AppEvent.close, function () {
    app.quit();
  });
}
