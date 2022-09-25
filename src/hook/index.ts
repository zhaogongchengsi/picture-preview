import { useIpcRenderer } from "./electron";
import { Ref, ref } from "vue";

export const OPEN_DIALOG = "OPEN_DIALOG";
export const PICYURE_LIST = "PICYURE_LIST";

export function usePictureList(): [Ref<string[]> ,() => void] {
  const ipcRenderer = useIpcRenderer();
  const pictureList = ref<string[]>([]);
  ipcRenderer.on(PICYURE_LIST, function (list?: string[]) {
    if (!list) {
      return;
    }
    pictureList.value = pictureList.value.concat(list.map(path => {
        // const url = new URL(path, "file://")
        // return url.href
        // return URL.createObjectURL(path);
        return path
    }));
    console.log(pictureList.value);
  });

  function open(path?: string) {
    ipcRenderer.send(OPEN_DIALOG, path);
  }

  return [pictureList, open];
}
