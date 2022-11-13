const express = require('express');
const router = express.Router();
const { projectsController } = require('../controllers')


router.get('/:id', projectsController.getProjectById);

module.exports = router;
