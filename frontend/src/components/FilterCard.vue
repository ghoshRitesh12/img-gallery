<template>

  <button data-filter-card
    class="
    px-5 py-2 rounded-2xl bg-cyan-200
    text-black hover:bg-cyan-400
    transition ease-in duration-150
    "
    type="button"
    aria-label="filter"
    :title="filterName"
  >
    {{ filterName }}
  </button>

</template>


<script setup>
  
defineProps({

  filterName: {
    type: String,
    required: true,
  },

})


</script>


<style>

</style>
