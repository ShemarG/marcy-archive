const { Document } = require('../schemas');

const getDocumentById = async (req, res) => {
	let { id } = req.params
	try {
		let result = await Document.findById(id)
		res.status(200).json(result)
	} catch (e) {
		res.status(500).send(e);
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
    await Document.findByIdAndUpdate(id, req.body)
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
	getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
}