<template>
  <div class="top-menus">
    <div class="top-menus-list">
        <button cursor="pointer" class="not-darg" text="xl gray-500" i-mdi="cog-outline" />
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const isFull = ref(false)
const setFull = () => {
    isFull.value = !isFull.value
}
</script>
<style lang="scss" scoped>
.top-menus {
  height: var(--top-menu-height);
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-left: 100px;
  -webkit-app-region: drag;

  .not-darg {
    -webkit-app-region: no-drag;
  }
  .top-menus-list {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 10px;
    box-sizing: border-box;
  }
}
</style>
