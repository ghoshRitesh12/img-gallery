import { ref, computed } from 'vue';

const apiBaseUrl = import.meta.env.VITE_API_BASEURL;

export const imgModalInfo = ref(null)

export const info = ref({
  currentPage: 1,
  hasNextPage: false,
  images: []
});

export const filteredImages = ref([]);


export const getImages = async (page = 1, filter = 'all') => {
  try {
    info.value.images = []

    const data = await (await fetch(
      `${apiBaseUrl}/images?page=${page}&filter=${filter}`
    )).json();

    info.value.currentPage = data.currentPage;
    info.value.hasNextPage = data.hasNextPage;
    info.value.images = data.images;
    filteredImages.value = data.images;

  } catch (err) {
    console.log(err);    
  }
}

export const setFavImages = () => {
  const foundFavImages = JSON.parse(localStorage.getItem('imgGallery_favs'));
  if(foundFavImages) {
    foundFavImages.push(imgModalInfo.value)
    localStorage.setItem('imgGallery_favs', JSON.stringify(
      [...new Set(foundFavImages)]
    ));
    return closeImgModal();
  }

  localStorage.setItem('imgGallery_favs', JSON.stringify([imgModalInfo.value]));
  closeImgModal()
}

export const deleteFavImages = (authorName) => {
  const foundFavImages = JSON.parse(localStorage.getItem('imgGallery_favs'));
  if(foundFavImages) {
    const filteredImgs = foundFavImages.filter(img => img.author !== authorName);

    localStorage.setItem('imgGallery_favs', JSON.stringify(
      [...new Set(filteredImgs)]
    ));

    closeImgModal()
    return getFavImages();
  }
}

export function getFavImages() {
  filteredImages.value = JSON.parse(localStorage.getItem('imgGallery_favs')) || []
}

export const filterImages = (filterName) => {
  if(filterName === 'all') {
    filteredImages.value = info.value.images;
    return;
  }

  filteredImages.value = info.value.images.filter(image => {
    return image.category.includes(filterName);
  })

  console.log(filteredImages.value);
}

export const getSearchedImages = async (query) => {
  try {
    const data = await (
      await fetch(`${apiBaseUrl}/images/search?q=${query}`)
    ).json();

    filteredImages.value = data.results

  } catch (err) {
    console.log(err);    
  }
}

export const openImgModal = (imgProps) => {
  imgModalInfo.value = imgProps;
  document.body.style.overflowY = 'hidden';
}
export function closeImgModal() {
  imgModalInfo.value = null;
  document.body.removeAttribute('style');
}
