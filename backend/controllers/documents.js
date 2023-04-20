const { Document } = require('../schemas');

// Not RESTful

// This endpoint is useful for sorted/filtered lists of documents
const getDocumentList = async (req, res) => {
  const { sort, filter, skip } = req.body
  try {
    let result = await Document
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(20)
      .lean()
    res.status(200).json(result)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

const getDocumentById = async (req, res) => {
	let { id } = req.params
	try {
		let result = await Document.findById(id)
		res.status(200).json(result)
	} catch (e) {
		res.status(500).send(e);
    console.log(e)
	}
}

const createDocument = async (req, res) => {
  try {
    await Document.create(req.body)
    res.status(201).send('Document created')
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

const updateDocument = async (req, res) => {
  let { id } = req.params
  try {
    // Make sure the document_type is available within the request body for this to work!
    await Document.findOneAndUpdate({_id: id, document_type: req.body.document_type }, req.body)
    res.status(204).send('Document updated')
  } catch (e) {
    res.status(500).send(e)
  }
}

const deleteDocument = async (req, res) => {
  let { id } = req.params
  try {
    await Document.findByIdAndDelete(id)
    res.status(204).send('Document deleted')
  } catch (e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getDocumentList,
	getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
}