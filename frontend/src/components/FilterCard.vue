<template>

  <RouterLink data-filter-card
    class="
    px-5 py-2 rounded-2xl capitalize
    transition ease-in duration-150
    "
    :class="(
      $route.query.filter === filterName || isActive ?
      'bg-cyan-200 text-black hover:bg-cyan-400' :
      'bg-zinc-700 text-white hover:bg-cyan-900'
    )"
    active-class="bg-cyan-200 text-black hover:bg-cyan-400"
    aria-label="filter"
    :title="filterName"
    :to="{ 
      query: { 
        page: $route.query.page || 1,
        filter: filterName 
      } 
    }"
  >
    {{ filterName }}
  </RouterLink>

</template>


<script setup>
  
defineProps({
  filterName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false
  }
})



</script>


<style>

</style>
