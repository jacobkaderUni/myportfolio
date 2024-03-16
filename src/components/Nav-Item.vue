<template>
  <div>
    <li :class="['li-item', 'group', { selected: props.selected, unselected: !props.selected }]">
      <v-icon
        :class="{ icon_selected: props.selected, icon_unselected: !props.selected }"
        :name="props.iconName"
      />
      <p :class="{ text_selected: props.selected, text_unselected: !props.selected }">
        {{ props.text }}
      </p>
    </li>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  iconName: String,
  text: String,
  selected: Boolean
})
</script>
<style scoped>
.li-item {
  @apply flex flex-row h-[40px] w-full place-items-center space-x-3 p-2 hover:transition-all duration-300;
}
.unselected {
  @apply border-[transparent] text-strong14 text-primary2-secondary
         hover:border hover:rounded-[12px] hover:bg-primary2-ghostBGHover
         active:bg-primary2-ghostBGPressed;
}
.icon_unselected {
  @apply text-primary2-tertiary;
}
.text_unselected {
  @apply text-primary2-secondary group-hover:text-primary2-primary;
}

.selected {
  @apply border-[transparent] text-strong14 text-primary2-secondary bg-primary2-ghostBGSelected rounded-[12px] font-sans
         hover:border hover:bg-primary2-ghostBGHover
         active:bg-primary2-ghostBGPressed;
}
.icon_selected {
  @apply text-primary2-primary;
}
.text_selected {
  @apply text-primary2-primary;
}
</style>
