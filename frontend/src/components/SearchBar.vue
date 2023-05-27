<template>

  <div data-search>

    <form 
      class="
      relative mx-auto max-w-[30rem] w-full
      "
      @submit.prevent="searchImage"
    >

      <input 
        type="search" 
        class="
        py-3 pl-5 pr-12 rounded-2xl bg-zinc-800
        focus:outline-none focus:outline-1 focus:outline-cyan-300
        focus:outline-offset-0 w-full
        "
        v-model.lazy.trim="searchTerm"
        placeholder="search for an image"
      />

      <button 
        type="submit"
        class="
        flex items-center justify-center
        absolute right-0 top-[50%] translate-y-[-50%]
        max-w-[1.2rem] w-full text-cyan-100 border-[0px]
        min-w-[1.2rem] pl-4 pr-6 py-2
        "
      >
        <svg 
          class="min-w-fit"
          xmlns="http://www.w3.org/2000/svg" 
          width="20" height="20" 
          viewBox="0 0 256 256"
        >
          <path fill="currentColor" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z"/>
        </svg>
      </button>

    </form>

  </div>

</template>


<script setup>
import { ref } from 'vue';
import { getSearchedImages } from '../stores/imageStore';


const searchTerm = ref('');

const searchImage = async () => {
  if(searchTerm.value.trim()) {
    getSearchedImages(searchTerm.value)
  }
}



</script>


<style>

</style>
