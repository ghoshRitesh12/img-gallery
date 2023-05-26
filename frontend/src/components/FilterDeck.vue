<template>

  <div data-filter-deck
    class="
    flex gap-3 flex-wrap
    w-fit mx-auto
    "
  >

    <FilterCard
      v-for="filter in filters"
      :key="filter"
      :filter-name="filter"
    />

  </div>

</template>


<script setup>
import { ref } from 'vue';
import FilterCard from './FilterCard.vue';

const filters = ref([
  'All', 'Fashion', 'Food',
  'Gadgets', 'Work'
]);


</script>


<style>

</style>
