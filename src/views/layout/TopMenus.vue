<template>
  <div class="top-menus">
    <a-space>
      <a-popover>
        <button
          cursor="pointer"
          class="not-darg"
          text="xl gray-500"
          i-mdi="cog-outline"
        />
        <template #content>
          <div>
            <div class="label">gap</div>
            <a-slider :default-value="50" :style="{ width: '200px' }" />
          </div>
          <div>
            <div class="label">gap</div>
            <a-slider :default-value="50" :style="{ width: '200px' }" />
          </div>
        </template>
      </a-popover>
    </a-space>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

    const setting = reactive({
  gap: "",
});
</script>
<style lang="scss">
.top-menus {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
</style>
