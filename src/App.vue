<script setup lang="ts">
import Contaner from "@/views/layou/index.vue"

// @ts-ignore
const {send, on} = window.electron.ipcRenderer

on("openDir", (data:any) => {
  console.log(data)
})

const openDir = () => {
  send('openDir')
}

</script>

<template>
  <Contaner>

    <button @click="openDir">开启窗口</button>

  </Contaner>
</template>

