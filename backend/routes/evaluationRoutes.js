const express = require('express');
const router = express.Router();
const FYPProjectController = require('../controllers/fypProjectController');

// Create a new FYP project
router.post('/fyp-projects', FYPProjectController.createFYPProject);

// Update an existing FYP project
router.put('/fyp-projects/:id', FYPProjectController.updateFYPProject);

module.exports = router;
