<template>

  <div data-pagination 
    class="
    flex items-center gap-3
    w-fit mx-auto pb-6
    "
  >

    <RouterLink v-if="info?.currentPage > 1" 
      class="
      bg-cyan-300 pl-5 pr-3 py-1 text-black 
      font-semibold rounded-2xl block
      "
      :to="{ 
        query: { 
          page: `${info?.currentPage - 1}`,
          filter: $route.query.filter || 'all'
        } 
      }"
    >
      <svg class="max-w-[1.2rem] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.125 21.1L.7 12.7q-.15-.15-.213-.325T.425 12q0-.2.063-.375T.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"/></svg>
    </RouterLink>

    <div 
      class="
      bg-cyan-300 px-5 py-2 text-black 
      font-semibold rounded-2xl
      "
    >
      {{ info?.currentPage || 1 }}
    </div>

    <RouterLink v-if="info?.hasNextPage"
      class="
      bg-cyan-300 px-4 py-1 text-black 
      font-semibold rounded-2xl block
      "
      :to="{ 
        query: { 
          page: `${info?.currentPage + 1}`,
          filter: $route.query.filter || 'all'
        } 
      }"
    >
      <svg class="max-w-[1.2rem] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375t.887.375l8.4 8.425q.15.15.213.325T17.6 12q0 .2-.063.375t-.212.325L8.9 21.125q-.35.35-.863.35T7.15 21.1Z"/></svg>
    </RouterLink>

  </div>

</template>


<script setup>
import { info } from '../stores/imageStore';


defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  hasNextPage: {
    type: Boolean,
    default: false
  },

})
  
</script>


<style>

</style>
