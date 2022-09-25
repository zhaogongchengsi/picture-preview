
import { onMounted,onUnmounted } from 'vue'
// @ts-ignore
const { on, removeEventListener, send, once } = window.electron.ipcRenderer;

const listener = (id:string,func: ((...args:any) => void)) => {
    let remove: () => void
    onMounted(() => {
        console.log("挂载监听")
        remove = on(id, func);
    });
    onUnmounted(() => {
        console.log('卸载取消监听')
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