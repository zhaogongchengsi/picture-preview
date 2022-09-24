import { Menu, app } from "electron";

export function createAppMenus(): Menu {
  const menus = createMenuTemplates();
  Menu.setApplicationMenu(menus);
  return menus
}

export function createMenuTemplates () {
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
        submenu: [{ label: "反馈" }],
      },
    ]);
}