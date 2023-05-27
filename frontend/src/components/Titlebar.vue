<template>

  <div data-titlebar
    class="
    flex items-center justify-between
    px-4 md:px-10 py-3 border-[0px]
    bg-zinc-900/50
    "
  >
    
    <RouterLink
      class="
      text-lg text-cyan-200 select-none
      font-semibold
      "
      to="/"
    >
      imgGallery
    </RouterLink>

    <Favorite/>

  </div>

</template>


<script setup>
import { RouterLink } from 'vue-router';
import Favorite from './Favorite.vue';

</script>


<style>

</style>
