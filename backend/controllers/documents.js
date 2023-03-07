const { Document } = require('../schemas');

// Not RESTful
const getDocumentList = async (req, res) => {
  const { sort, filter, skip } = req.body
  try {
    let result = await Document
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(20)
      .lean()
    result.forEach(item => {
      item.document = item.document.toString();
    })
    res.status(200).json(result)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

const getDocumentById = async (req, res) => {
	let { id } = req.params
	try {
		let result = await Document.findById(id).lean()
    result.document = result.document.toString()
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
  getDocumentList,
	getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
}