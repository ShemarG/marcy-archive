const express = require('express');
const router = express.Router();
const { photosController } = require('../controllers')

const {
  getPhotoById,
  createPhoto,
  updatePhoto,
  deletePhoto
} = photosController


router.get('/:id', getPhotoById);
router.post('/', createPhoto)
router.patch('/:id', updatePhoto)
router.delete('/:id', deletePhoto)

module.exports = router;
