<template>
<Suspense>
 <Image :src="props.src" :alt="props.src" />
  <template #fallback>
    <slot name="loading">
      <div class="fallback">加载中...</div>
    </slot>
  </template>
</Suspense>
</template>
<script setup lang="ts">
import Image from './Image';
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
});

</script>
<style lang="scss">
  .fallback {
    width: 100%;
    height: 100px;
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
