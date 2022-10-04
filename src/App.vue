<script setup lang="ts">
import Contaner from "@/views/layout/index.vue";
import AppHub from './views/Hub/index.vue'


</script>

<template>
  <Contaner>
    <template #header>
      <div class="top-menus">
        <button
          cursor="pointer"
          class="not-darg"
          text="xl gray-500"
          i-mdi="cog-outline"
        />
      </div>
    </template>
    <AppHub />
  </Contaner>
</template>

<style lang="scss">
.top-menus {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
</style>
