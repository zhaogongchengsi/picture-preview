
import { onMounted,onUnmounted } from 'vue'
// @ts-ignore
const { on, removeEventListener, send, once } = window.electron.ipcRenderer;

const listener = (id:string,func: ((...args:any) => void)) => {
    let remove: () => void
    onMounted(() => {
        remove = on(id, func);
    });
    onUnmounted(() => {
        remove && remove();
    });
}

export function useIpcRenderer () {
    return {
      on: listener,
      send: send,
      removeEventListener,
      once,
    };
}

export function useIpcSend (id:string) {
    if (!id) {
        throw new Error(`${id} Does not exist`);
    }
    return function (...data: any) {
        send(id, ...data)
    };
}