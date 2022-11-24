const { Project } = require('../schemas');

// Not RESTful
const getProjectList = async (req, res) => {
  const { sort, filter, skip } = req.body
  try {
    let result = await Project
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(20)
      .lean()
    result.forEach(item => {
      if (item.screenshot) item.screenshot = item.screenshot.toString();
    })
    res.status(200).json(result)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

const getProjectById = async (req, res) => {
	let { id } = req.params
	try {
		let result = await Project.findById(id).lean()
    if (result.screenshot) {
      result.screenshot = result.screenshot.toString()
    }
		res.status(200).json(result)
	} catch (e) {
		res.status(500).send(e);
	}
}

const createProject = async (req, res) => {
  try {
    await Project.create(req.body)
    res.status(201).send('Document created')
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

const updateProject = async (req, res) => {
  let { id } = req.params
  try {
    let result = await Project.findByIdAndUpdate(id, req.body)
    res.status(204).send('Document updated')
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

const deleteProject = async (req, res) => {
  let { id } = req.params
  try {
    await Project.findByIdAndDelete(id)
    res.status(204).send('Document deleted')
  } catch (e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getProjectList,
	getProjectById,
  createProject,
  updateProject,
  deleteProject
}