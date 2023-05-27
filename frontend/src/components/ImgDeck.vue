<template>

  <div data-img-deck class="grid justify-center md:px-2">

    <div v-if="filteredImages.length < 1"
      class="
      flex justify-center items-center flex-col 
      text-zinc-400 gap-3
      "
    >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10m3-9v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1zm7-1v4a1 1 0 0 0 1 1h3m0-5v10"/></svg>
      </div>

      <div class="text-lg md:text-2xl font-semibold">
        {{ 'Image(s) not found :(' }}
      </div>
    </div>

    <ImgCard v-else
      v-for="image in filteredImages"
      :key="image.url"
      :author="image.author"
      :author-pfp="image.authorPfp"
      :img-title="image.title || image.imgTitle"
      :url="image.url"
      :views="image.views"
      :class="filteredImages.length <= 4 ? 'max-w-[16rem]' : ''"
    />

  </div>

</template>


<script setup>
import { ref, watch } from 'vue';
import { filteredImages } from '../stores/imageStore';
import ImgCard from './ImgCard.vue';


const maxSize = ref('1fr');

watch(
  () => filteredImages.value,
  () => {
    if(filteredImages.value.length <= 5) {
      maxSize.value = '16rem';
    } else {
      maxSize.value = '1fr'
    }
  },
  {
    immediate: true,
  }
)

if(filteredImages.length <= 5) {
  maxSize.value = '16rem';
}




</script>


<style scoped>

  [data-img-deck] {
    --max: 1fr;
    gap: var(--gap, 1.2rem);
    grid-template-columns: 
      repeat(auto-fit, minmax(var(--min, 9rem), var(--max)));
  }

  @media (min-width: 768px) {
    [data-img-deck] {
      --gap: 1.5rem;
      --min: 12rem;
      --max: v-bind(maxSize)
    }
  }
  @media (min-width: 1024px) {
    [data-img-deck] {
      --min: 16rem;
    }
  }


</style>
