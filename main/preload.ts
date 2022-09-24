import { contextBridge, ipcRenderer } from "electron";
import { on, once, send } from "./apis";

const removeEventListener = (
  channel: string,
  listener: (...args: any[]) => void
) => {
  ipcRenderer.removeListener(channel, listener);
};

contextBridge.exposeInMainWorld("electron", {
  app: {
    close: () => ipcRenderer.send("close"),
  },
  ipcRenderer: {
    send,
    on,
    once,
    removeEventListener,
  },
});
