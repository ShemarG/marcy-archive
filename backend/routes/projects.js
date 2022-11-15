const express = require('express');
const router = express.Router();
const { projectsController } = require('../controllers')

const {
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = projectsController


router.get('/:id', getProjectById);
router.post('/', createProject)
router.patch('/:id', updateProject)
router.delete('/:id', deleteProject)

module.exports = router;
