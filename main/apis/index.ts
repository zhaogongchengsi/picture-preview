import { ipcRenderer } from "electron";
import { addEventOpenDir, addEventAppClose } from "./init";

export const send = (channel: string, ...params: unknown[]) => {
  ipcRenderer.send(channel, ...params);
};

export const on = (channel:string, func: (...args:any[]) => void) => {
  const listener = (_: Electron.IpcRendererEvent, ...params: any[]) => {
    func(...params);
  };
  ipcRenderer.on(channel, listener);
  return () => {
    ipcRenderer.removeListener(channel, listener);
  };
}

export const once = (channel: string, func: (...params: unknown[]) => void) => {
  return ipcRenderer.once(channel, func);
};


export enum File {
    openFile = 'openFile',
    openDir = 'openDir'
}

export enum AppEvent {
    close = "close",
}

export function addAppEventListener () {
    addEventOpenDir();
    addEventAppClose();
}

export const IMAGE_EXT = [".png", ".jpeg", ".jpg", ".svg"];