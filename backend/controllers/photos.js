const { Photo } = require('../schemas');

const getPhotoById = async (req, res) => {
	let { id } = req.params
	try {
		let result = await Photo.findById(id)
		res.status(200).json(result)
	} catch (e) {
		res.status(500).send(e);
	}
}

const createPhoto = async (req, res) => {
  try {
    await Photo.create(req.body)
    res.status(201).send('Document created')
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

const updatePhoto = async (req, res) => {
  let { id } = req.params
  try {
    await Photo.findByIdAndUpdate(id, req.body)
    res.status(204).send('Document updated')
  } catch (e) {
    res.status(500).send(e)
  }
}

const deletePhoto = async (req, res) => {
  let { id } = req.params
  try {
    await Photo.findByIdAndDelete(id)
    res.status(204).send('Document deleted')
  } catch (e) {
    res.status(500).send(e)
  }
}

module.exports = {
	getPhotoById,
  createPhoto,
  updatePhoto,
  deletePhoto
}