<template>

  <div data-filter-deck
    class="
    flex gap-[.65rem] flex-wrap
    w-fit mx-auto
    "
  >

    <FilterCard
      v-for="filter, index in filters"
      :key="filter"
      :filter-name="filter"
      :is-active="!$route.query.filter && index === 0"
    />

  </div>

</template>


<script setup>
import { ref } from 'vue';
import FilterCard from './FilterCard.vue';

const filters = ref([
  'all', 'nature', 'food', 'room',
  'building', 'people', 'things'
]);


</script>


<style>

</style>
