<template>

  <div>

    <Titlebar/>
    <RouterView :key="$route.fullPath"/>
    <ImgModal/>

  </div>

</template>


<script setup>
import ImgModal from './components/ImgModal.vue';
import Titlebar from './components/Titlebar.vue';
import { RouterView } from 'vue-router';


</script>


<style>

</style>
