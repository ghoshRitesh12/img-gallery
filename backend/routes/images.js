import { Router } from 'express';
import { getImages, searchImages } from '../controllers/imagesController.js';

const router = Router();


router.get('/', getImages)

router.get('/search', searchImages)

export default router;
