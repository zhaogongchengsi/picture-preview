import { BrowserWindow, app } from "electron";
import { resolve } from "path";
import { createAppMenus } from "./menus";
import { addAppEventListener } from "./apis";

let win: BrowserWindow | undefined = undefined;

// @ts-ignore
const { loadUrl, mode, preload } = import.meta.env;

const getPath = (path: string) => {
  return resolve(__dirname, path);
};

const createWindow = () => {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    minHeight: 500,
    minWidth: 800,
    webPreferences: {
      nodeIntegration: true,
      preload: preload && getPath(preload),
    },
    titleBarStyle: "hidden",
    transparent: true,
  });

  if (mode === "production") {
    win.loadFile(loadUrl);
  } else {
    win.loadURL(loadUrl);
  }
};

app
  .whenReady()
  .then(() => {
    createWindow();
    createAppMenus();
    addAppEventListener();
    mode === "development" && win?.webContents.openDevTools();
  })
  .catch(console.error);

app.on("quit", () => {
  win = undefined;
});
