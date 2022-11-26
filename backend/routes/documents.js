const express = require('express');
const router = express.Router();
const { documentsController } = require('../controllers')

const {
  getDocumentList,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
} = documentsController

// Not RESTful
router.post('/list', getDocumentList)

router.get('/:id', getDocumentById);
router.post('/', createDocument)
router.patch('/:id', updateDocument)
router.delete('/:id', deleteDocument)

module.exports = router;