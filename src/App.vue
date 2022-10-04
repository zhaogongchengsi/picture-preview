<script setup lang="ts">
import Contaner from "@/views/layout/index.vue";
import AppHub from "./views/Hub/index.vue";
import TopMenus from "./views/layout/TopMenus.vue";

</script>

<template>
  <Contaner>
    <template #header>
      <TopMenus />
    </template>
    <AppHub />
  </Contaner>
</template>
