<template>

  <div 
    class="_favorites px-4 pt-8 pb-6 md:p-8"
  >
    
    <div class="text-2xl text-zinc-100 ">
      Your favorite images
    </div>

    <ImgDeck class="py-16 md:py-[6rem]"/>

  </div>

</template>


<script setup>
import ImgDeck from '../components/ImgDeck.vue';
import { getFavImages } from '../stores/imageStore.js';

getFavImages()

</script>


<style>

</style>
