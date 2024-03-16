<template>
  <div class="fixed top-0 left-0 h-screen w-[280px] z-20 py-10 px-6 space-y-8">
    <div class="flex justify-center items-center w-full">
      <Profile />
    </div>

    <div>
      <Socials />
    </div>
    <div class="w-full flex flex-col">
      <ul class="flex flex-col space-y-1">
        <div v-for="(item, itemIndex) in listItems" :key="item.text">
          <NavItem
            :icon-name="item.icon"
            :text="item.text"
            :selected="item.selected"
            @click="handleSelect(itemIndex)"
          />
        </div>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import Profile from './Profile.vue'
import NavItem from './Nav-Item.vue'
import Socials from './Socials.vue'
import { OhVueIcon, addIcons, listIcons } from 'oh-vue-icons'
import {
  CoHome,
  BiBriefcase,
  BiPerson,
  BiShopWindow,
  BiPencil,
  BiEnvelope
} from 'oh-vue-icons/icons'

addIcons(CoHome, BiBriefcase, BiPerson, BiShopWindow, BiPencil, BiEnvelope)

const listItems = reactive([
  { id: 'home', text: 'Homepage', icon: 'co-home', selected: false },
  { id: 'projects', text: 'Projects', icon: 'bi-briefcase', selected: false },
  { id: 'about', text: 'About', icon: 'bi-person', selected: false },
  { id: 'store', text: 'Store', icon: 'bi-shop-window', selected: false },
  { id: 'blog', text: 'Blog', icon: 'bi-pencil', selected: false },
  { id: 'contact', text: 'Contact', icon: 'bi-envelope', selected: true }
])

const handleSelect = (itemIndex: any) => {
  const selectedIndex = listItems.findIndex((item) => item.selected)
  console.log(selectedIndex)
  if (itemIndex != selectedIndex) {
    listItems[selectedIndex].selected = false
    listItems[itemIndex].selected = true
  }
}
</script>
<style scoped>
.container {
}
</style>
