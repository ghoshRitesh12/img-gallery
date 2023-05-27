<template>

  <div v-if="imgModalInfo"
    class="
    img-modal grid place-items-center fixed inset-0
    "
  >
    <div data-modal-backdrop
      class="
      fixed inset-0 isolate z-50 bg-black/80 
      "
      @click="closeImgModal"
      style="backdrop-filter: blur(.25rem);"
    ></div>

    <div 
      class="
      relative z-[70] max-w-[20rem] w-full
      md:max-w-[50rem] md:min-h-[35rem]
      border-2 border-zinc-600 rounded-2xl
      "
    >
    
      <div class="relative mx-auto">

        <div class="max-w-full rounded-2xl overflow-hidden mx-auto">
          <img 
            :src="imgModalInfo.url" 
            :alt="imgModalInfo.title"
            decoding="async"
            fetchpriority="high"
            class="
            max-h-[25rem] min-h-[25rem] w-full
            md:max-h-[35rem] md:min-h-[35rem]
            object-center
            "
          />
        </div>

        <div 
          class="
          absolute bottom-0 bg-black/70 py-3 px-3 sm:px-4 
          rounded-xl rounded-bl-2xl rounded-br-2xl w-full
          "
          style="backdrop-filter: blur(.2rem)"
        >
          <div
            class="
            absolute top-[-2.8rem] right-2
            px-4 py-2 bg-zinc-800 rounded-3xl
            text-[.9rem]
            "
          >
            <button v-if="isFavorite" 
              type="button"
              @click="deleteFavImages(imgModalInfo.author)"
            >
              Remove from favorites
            </button>

            <button v-else 
              type="button"
              @click="setFavImages()"
            >
              Add to favorites
            </button>

          </div>

          <div
            class="
            leading-[1.2] text-[1rem] mb-4 overflow-hidden
            "
            :style="`
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            `"
          >
            {{ imgModalInfo.imgTitle }}
          </div>

          <div data-author class="flex items-center gap-3">
            <img 
              :src="imgModalInfo.authorPfp" 
              :alt="imgModalInfo.author"
              decoding="async"
              fetchpriority="high"
              class="max-w-[1.8rem] flex-shrink-0 rounded-[50%]"
            />

            <div class="text-[.9rem]">
              {{ imgModalInfo.author }}
            </div>

          </div>

        </div>

        <div 
          class="
          absolute top-3 left-3 px-2
          flex items-center gap-2 text-zinc-200
          bg-zinc-900/80 rounded-3xl
          "
        >

          <div class="max-w-[1rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"/></svg>
          </div>

          <div class="text-sm">
            {{ imgModalInfo.views }}
          </div>

        </div>

      </div>


      <button
        class="
        absolute top-[-.5rem] right-[-.5rem]
        bg-zinc-700 grid place-items-center 
        py-1 px-2 rounded-[50%]
        "
        @click="closeImgModal"
        type="button"
        aria-label="close modal"
      >
        <svg class="max-w-[1.5rem] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"/></svg>
      </button>


    </div>

  </div>

</template>


<script setup>
import { ref, watch } from 'vue';
import { imgModalInfo, closeImgModal, setFavImages, deleteFavImages } from '../stores/imageStore.js';


const isFavorite = ref(false);

watch(
  () => imgModalInfo.value,
  () => {
    if(imgModalInfo.value) {
      isFavorite.value = false;
      const favImgs = JSON.parse(localStorage.getItem('imgGallery_favs'));

      if(!favImgs) {
        isFavorite.value = false;
      } else {
        if(favImgs.some(img => img.author === imgModalInfo.value.author))
          isFavorite.value = true;
      }

    }
  },
  { immediate: true }
)



</script>


<style>

</style>
