<template>
  <div>
    <img :src="src" alt="">
  </div>
</template>
<script setup lang="ts">
import { rendererImg } from "../el";
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
});
const src = await rendererImg(props.src);


</script>
<style lang=""></style>
