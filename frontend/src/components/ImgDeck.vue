<template>

  <div data-img-deck class="md:px-2">

    <ImgCard
      v-for="i in 20"
      :imgsrc="tsrc"
    />

  </div>

</template>


<script setup>
import ImgCard from './ImgCard.vue';

const tsrc = 'https://images.unsplash.com/photo-1683143726433-09aebe1a7871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60';

</script>


<style scoped>

  [data-img-deck] {
    display: grid;
    gap: var(--gap, 1.2rem);
    grid-template-columns: 
      repeat(auto-fit, minmax(var(--min, 9rem), 1fr));
  }

  @media (min-width: 768px) {
    [data-img-deck] {
      --gap: 1.5rem;
      --min: 12rem;
    }
  }
  @media (min-width: 1024px) {
    [data-img-deck] {
      --min: 14rem;
    }
  }


</style>
