import { createRouter, createWebHistory } from 'vue-router';


export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: () => import("./pages/GalleryView.vue")
    },
    {
      path: '/favorites',
      component: () => import("./pages/FavoriteView.vue")
    },
  ]

})

