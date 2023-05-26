<template>

  <div class="p-4 md:p-8">

    <FilterDeck/>
    <SearchBar class="mt-6"/>


    <ImgDeck class="py-16"/>

  </div>

</template>


<script setup>
import FilterDeck from './components/FilterDeck.vue';
import SearchBar from './components/SearchBar.vue';
import ImgDeck from './components/ImgDeck.vue';

</script>


<style>

</style>
