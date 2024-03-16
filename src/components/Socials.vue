<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="flex flex-row space-x-3 justify-center">
      <div class="container"><IconX class="icon" /></div>
      <div class="container"><IconDribbble class="icon" /></div>
      <div class="container"><IconLinkedin class="icon" /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IconDribbble, IconLinkedin, IconX } from '@iconify-prerendered/vue-simple-icons'
</script>
<style scoped>
.container {
  @apply w-[32px] h-[32px] grid  rounded-full place-items-center hover:bg-primary2-ghostBGHover active:bg-primary2-ghostBGPressed;
}
.icon {
  @apply text-primary2-tertiary w-[20px] h-[20px] 
          hover:text-primary2-primary;
}
</style>
