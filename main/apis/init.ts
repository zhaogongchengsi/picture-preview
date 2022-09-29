import { AppEvent } from "./index";
import { ipcMain, app } from "electron";
import { openImagesFile } from "./dialog";
import { scanFolders } from "../folders";

export const OPEN_DIALOG = "OPEN_DIALOG";
export const PICYURE_LIST = "PICYURE_LIST";

export type Agreement = "file://" | "http://" | "https://";

export function addEventOpenDir() {
  return ipcMain.on(
    OPEN_DIALOG,
    function (
      event: Electron.IpcMainEvent,
      path: string,
      agreement: Agreement = "file://"
    ) {
      openImagesFile(path)
        .then(async (res) => {
          event.reply(PICYURE_LIST, scanFolders(res,'' ,agreement));
        })
        .catch((err) => {
          event.reply(PICYURE_LIST, undefined);
        });
    }
  );
}

export function addEventAppClose() {
  return ipcMain.on(AppEvent.close, function () {
    app.quit();
  });
}
