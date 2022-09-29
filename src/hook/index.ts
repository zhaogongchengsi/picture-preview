import { useIpcRenderer } from "./electron";
import { Ref, ref } from "vue";
import { FolderInfo, FolderStats, ImageSize } from "../../types";

export const OPEN_DIALOG = "OPEN_DIALOG";
export const PICYURE_LIST = "PICYURE_LIST";

export interface ImageInfo {
  dir: string;
  path: string;
  stats?: FolderStats;
  size?: ImageSize;
}

export function usePictureList(): [Ref<ImageInfo[]>, () => void] {
  const ipcRenderer = useIpcRenderer();
  const pictureList = ref<ImageInfo[]>([]);
  ipcRenderer.on(PICYURE_LIST, function (list?: FolderInfo[]) {
    if (!list) {
      return;
    }
    const arr = delayering(list);
    pictureList.value = arr;
  });

  function open(path?: string) {
    ipcRenderer.send(OPEN_DIALOG, path, "file://");
  }

  return [pictureList, open];
}

export function delayering(trees: FolderInfo[]): ImageInfo[] {
  function flat(
    infos: FolderInfo[],
    root: ImageInfo[] = [],
    current?: FolderInfo
  ): ImageInfo[] {

    for (const info of infos) {
      if (info.type === "dir") {
        root.concat(flat(info.content!, root, info));
      } else {
        root.push({
          dir: current?.path!,
          size: info.size,
          stats: info.stats,
          path: info.path
        })
      }
    }
    
    return root;
  }

  return flat(trees);
}
