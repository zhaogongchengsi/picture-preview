import { BrowserWindow, app, Tray, nativeImage } from "electron";
import { resolve } from "path";
import { createAppMenus } from "./menus";
import { addAppEventListener } from "./apis";
// import iconPath from '../public/icon/icon.png'

let win: BrowserWindow | undefined = undefined;
let appIcon: Tray;

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
    // icon: iconPath,
    webPreferences: {
      nodeIntegration: true,
      preload: preload && getPath(preload),
      webSecurity: false,
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

// const setIcon = () => {
//     const image = nativeImage.createFromPath(iconPath);
//     appIcon = new Tray(image)
// }

app
  .whenReady()
  .then(() => {
    createWindow();
    // setIcon();
    createAppMenus(win!);
    addAppEventListener();
    
    mode === "development" && win?.webContents.openDevTools();
  })
  .catch(console.error);

app.on("quit", () => {
  win = undefined;
});
