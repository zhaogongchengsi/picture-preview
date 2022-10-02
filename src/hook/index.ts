import { useIpcRenderer } from "./electron";
import { computed, Ref, ref } from "vue";
import { FolderInfo, FolderStats, ImageSize } from "../../types";
import { OnRenderer } from "../../channels";

export const OPEN_DIALOG = "OPEN_DIALOG";
export const PICYURE_LIST = "PICYURE_LIST";

export interface ImageInfo {
  dir: string;
  path: string;
  stats?: FolderStats;
  size?: ImageSize;
}

export function usePictureList() {
  const ipcRenderer = useIpcRenderer();
  const pictureList = ref<FolderInfo[]>([]);
  ipcRenderer.on(OnRenderer.FileSelected, function (list?: FolderInfo[]) {
    if (!list) {
      return;
    }
    pictureList.value = list;
  });

  ipcRenderer.on(OnRenderer.AppendFile, function (list?: FolderInfo[]) {
    if (!list) {
      return;
    }
    pictureList.value = pictureList.value.concat(list);
  });

  return computed(() => {
      return delayering(pictureList.value);
  })
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
          path: info.path,
        });
      }
    }

    return root;
  }

  return flat(trees);
}
