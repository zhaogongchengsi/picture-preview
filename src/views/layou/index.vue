<template>
    <div class="w-screen h-screen bg-white dark:bg-black">
        <TopMenu />
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import TopMenu from './TopMenu.vue'

</script>