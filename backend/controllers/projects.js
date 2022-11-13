const { Project } = require('../schemas');

const getProjectById = async (req, res) => {
	let { id } = req.params
	try {
		let result = await Project.findById(id)
		res.status(200).json(result)
	} catch (e) {
		res.status(500).send(e);
	}
}

module.exports = {
	getProjectById
}