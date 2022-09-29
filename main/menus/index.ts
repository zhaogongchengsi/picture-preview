import { Menu, app, BrowserWindow } from "electron";

export function createAppMenus(wind:BrowserWindow): Menu {
  const menus = createMenuTemplates(wind);
  Menu.setApplicationMenu(menus);
  return menus
}

export function createMenuTemplates(wind:BrowserWindow) {
  let devMenus = []
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
        submenu: [{ label: "打开" }, { label: "关闭" }],
      },
      {
        label: "文件",
        submenu: [
          { label: "打开" },
          { label: "关闭" },
          { label: "打开文件夹" },
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