<script setup lang="ts">
import Contaner from "@/views/layout/index.vue";
import AppHub from "./views/Hub/index.vue";
import TopMenus from "./views/layout/TopMenus.vue";
import { AutoScroll } from './components/AutoScroll'

</script>

<template>
  <Contaner>
    <template #header>
      <TopMenus />
    </template>
    <AutoScroll :height="`calc(100vh - var(--top-menu-height))`">
       <AppHub />
    </AutoScroll>
  </Contaner>
</template>
