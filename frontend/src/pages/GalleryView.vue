<template>

  <div class="_imgGallery px-4 pt-12 pb-6 md:p-8">

    <FilterDeck/>

    <SearchBar class="mt-8"/>

    <ImgDeck class="py-16 md:py-[6rem]"/>

    <Pagination/>

  </div>

</template>


<script setup>
import { useRoute } from 'vue-router';
import { getImages } from '../stores/imageStore'; 

import FilterDeck from '../components/FilterDeck.vue';
import SearchBar from '../components/SearchBar.vue';
import ImgDeck from '../components/ImgDeck.vue';
import Pagination from '../components/Pagination.vue';


const route = useRoute();
getImages(route.query.page, route.query.filter);


</script>


<style>

</style>
