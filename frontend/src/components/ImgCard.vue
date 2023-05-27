<template>

  <div data-img
    class="
    relative overflow-hidden max-h-[15rem] 
    md:max-h-[24rem] rounded-2xl
    "
  >

    <img 
      :src="props.url" 
      :alt="props.imgTitle"
      decoding="async"
      loading="lazy"
      class="
      min-h-[15rem] md:min-h-[24rem]
      min-w-[20rem] object-center
      "
      @click="openImgModal(props)"
    />

    <div 
      class="
      absolute bottom-2 right-2 px-2
      flex items-center gap-2 text-zinc-200
      bg-zinc-900/80 rounded-3xl
      "
    >

      <div class="max-w-[1rem]">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"/></svg>
      </div>

      <div class="text-sm">
        {{ props.views }}
      </div>

    </div>

  </div>

</template>


<script setup>
import { openImgModal } from '../stores/imageStore.js';

const props = defineProps({
  author: {
    type: String,
    required: true
  },
  authorPfp: {
    type: String,
    required: true
  },
  imgTitle: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    required: true
  },
  url: {
    type: String, 
    required: true,
  },
  category: {
    type: String,
  }
})



</script>

