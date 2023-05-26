<template>

  <div data-img
    class="overflow-hidden rounded-xl"
  >

    <img 
      :src="imgsrc" 
      alt="some image"
      decoding="async"
      loading="lazy"
    />

  </div>

</template>


<script setup>

// const timgsrc = 'https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=796&q=80';

defineProps({
  imgsrc: {
    type: String, 
    required: true,
  },
})

</script>

