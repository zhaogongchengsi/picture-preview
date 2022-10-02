<template>
  <div
    class="image-container"
    :style="{ columnCount: props.columnCount, columnGap: props.gap + 'px' }"
  >
    <div
      class="img-item"
      v-for="img of imgs"
      :key="img.path"
      :style="{ marginBottom: props.gap + 'px' }"
    >
      <slot :picture="img">
        <img v-src="img.path" :alt="img.path" />
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { FolderInfo } from "../../types";

const props = defineProps({
  pictures: {
    type: Array,
    defaule: () => [],
  },
  gap: {
    type: Number,
    default: 10,
  },
  columnCount: {
    type: Number,
    default: 5,
  },
});

function creatTwoDArray(length: number): [][] {
  return Array.from({ length }).map(() => []);
}

function deal<T>(brand: T[], games: number = 5) {
  const gameList = creatTwoDArray(games);
  let currentPlayer = 0;
  for (const item of brand) {
    // @ts-ignore
    gameList[currentPlayer ?? games - 1]?.push(item);
    currentPlayer++;
    if (currentPlayer % games === 0) {
      currentPlayer = 0;
    }
  }
  return gameList.flat();
}

const imgs = computed<FolderInfo[]>(() => {
  return deal<FolderInfo>(props.pictures as FolderInfo[], props.columnCount);
});
</script>
<style lang="scss">
.image-container {
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
}

.img-item {
  overflow: hidden;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.5);
    }
  }

  img {
    width: 100%;
    // height: 100%;
    display: block;
    object-fit: cover;
    transition: all 2s;
  }
}
</style>
