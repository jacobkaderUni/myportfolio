<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col hPhone:flex-row min-h-screen">
    <!-- myNavcontent -->
    <div class="">
      <NavContent />
    </div>
    <!-- mymodal -->
    <div class="pl-[280px] flex-1 overflow-hidden relative">
      <div class="flex flex-row h-full overflow-hidden">
        <myModal></myModal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import myModal from './my-modal.vue'
import NavContent from './Nav-content.vue'
</script>
<style></style>
