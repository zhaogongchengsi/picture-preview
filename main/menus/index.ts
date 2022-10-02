import { Menu, app, BrowserWindow } from "electron";
import { OnRenderer } from "../../channels";
import { scanImages } from "../folders";

export function createAppMenus(wind: BrowserWindow): Menu {
  const menus = createMenuTemplates(wind);
  Menu.setApplicationMenu(menus);
  return menus;
}

export function createMenuTemplates(wind: BrowserWindow) {
  let devMenus = [];

  const sned = (id: string, ...message: any) => {
    wind.webContents.send(id, ...message);
  };

  if (import.meta.env.mode === "development") {
    devMenus.push({
      label: "打开开发者工具",
      click() {
        wind.webContents.openDevTools();
      },
    });
  }
  return Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [{ label: "打开" }, { label: "检查更新" }],
    },
    {
      label: "文件",
      submenu: [
        {
          label: "打开",
          async click() {
            const res = await scanImages();
            sned(OnRenderer.FileSelected, res);
          },
        }
      ],
    },
    {
      label: "窗口",
      submenu: [{ label: "最大化" }, { label: "最小化" }],
    },
    {
      label: "帮助",
      submenu: [{ label: "反馈" }, ...devMenus],
    },
  ]);
}
