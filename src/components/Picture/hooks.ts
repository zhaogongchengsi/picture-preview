import { computed, ComputedRef, inject, provide, reactive } from "vue";

export function usePictures(pictures: string[], columnCount: number) {
  function creatTwoDArray(length: number): [][] {
    return Array.from({ length }).map(() => []);
  }

  function deal<T>(brand: T[], games: number = 5) {
    const gameList = creatTwoDArray(games);
    let currentPlayer = 0;
    for (const item of brand) {
      // @ts-ignore
      gameList[currentPlayer]?.push(item);
      currentPlayer++;
      if (currentPlayer === games) {
        currentPlayer = 0;
      }
    }
    return gameList.flat();
  }

  return computed<string[]>(() => {
    // console.log(pictures);

    const list = deal<string>(pictures, columnCount);
    
    return pictures;
  });
}

export const PREVIEW_PROIDE_NAME = Symbol("preview-pricture");

type func = () => void;
export interface PreviewProvide {
  close: func;
  open: func;
  next: func;
  prev: func;
  previewState: {
    pictures: string[];
    CurrentPrevieImage: number;
    previeDialogVisible: boolean;
  };
}

export function usePicturePreviewProvide(
  images: ComputedRef<string[]>,
  step: number = 5,
  currentImg: number = 0
) {
  const preview = reactive({
    pictures: images.value,
    CurrentPrevieImage: currentImg,
    previeDialogVisible: false,
  });

  const findImgIndex = (url: string) => {
    if (preview) {
      return preview.pictures.findIndex((img) => img === url);
    }
    return 0;
  };

  const close = () => {
    preview.previeDialogVisible = false;
  };

  const open = (currentImg: string) => {
    const index = findImgIndex(currentImg);
    preview.CurrentPrevieImage = index;
    preview.previeDialogVisible = true;
  };

  const next = () => {
    preview.CurrentPrevieImage ++;
  };
  const prev = () => {
    preview.CurrentPrevieImage --;
  };

  const provideValue = {
    close,
    open,
    next,
    prev,
    previewState: preview,
  };
  provide(PREVIEW_PROIDE_NAME, provideValue);
  return provideValue;
}

export function useImagesPreview() {
  return inject<PreviewProvide>(PREVIEW_PROIDE_NAME);
}
