declare global {
  interface window {
    electron: {
      app: {
        close: () => void;
      };
      ipcRenderer: {
        send: (id: string, data: any) => void;
        on: (id: string, func: (...args: any) => void) => void;
        once: () => void;
        removeEventListener: () => void;
      };
    };
  }
}
