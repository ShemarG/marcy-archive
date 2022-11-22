const express = require('express');
const router = express.Router();
const { projectsController } = require('../controllers')

const {
  getProjectList,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = projectsController

// Not RESTful
router.post('/list', getProjectList);

router.get('/:id', getProjectById);
router.post('/', createProject)
router.patch('/:id', updateProject)
router.delete('/:id', deleteProject)

module.exports = router;