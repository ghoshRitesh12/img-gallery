<template>

  <div data-search>

    <form 
      class="
      relative mx-auto max-w-[25rem] w-full
      "
    >

      <input 
        type="search" 
        class="
        py-[.6rem] pl-4 pr-8 rounded-2xl bg-zinc-800
        focus:outline-none focus:outline-1 focus:outline-cyan-400
        focus:outline-offset-0 w-full
        "
        placeholder="search for an image"
      />

      <button 
        type="submit"
        class="
        absolute right-4 top-[50%] translate-y-[-50%]
        max-w-[1.2rem] text-zinc-300 border-[0px]
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z"/>
        </svg>
      </button>

    </form>

  </div>

</template>


<script setup>
  
</script>


<style>

</style>
