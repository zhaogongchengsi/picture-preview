import { AppEvent } from "./index";
import { ipcMain, app } from "electron";
import { OnMain, OnRenderer } from "../../channels";
import scanImages from "../ScanImages";
import { openImagesFile } from "./dialog";

export type Agreement = "file://" | "http://" | "https://";

export function addEventOpenDir() {
  return ipcMain.on(
    OnMain.ScanImage,
    function (
      event: Electron.IpcMainEvent,
      path: string,
      agreement: Agreement = "file://"
    ) {
        openImagesFile().then(paths => {
          scanImages.scan(paths)
          event.reply(OnRenderer.FileSelected, scanImages.pictures);
        })
    }
  );
}

export function addEventAppClose() {
  return ipcMain.on(AppEvent.close, function () {
    app.quit();
  });
}
