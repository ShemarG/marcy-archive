const express = require('express');
const router = express.Router();
const { documentsController } = require('../controllers')

const {
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
} = documentsController


router.get('/:id', getDocumentById);
router.post('/', createDocument)
router.patch('/:id', updateDocument)
router.delete('/:id', deleteDocument)

module.exports = router;