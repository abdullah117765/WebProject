const express = require('express');
const router = express.Router();
const requirementController = require('../controller/requirementsController');

// Create a new requirement
router.post('/createRequirement', requirementController.createRequirement);

// Get all requirements
router.get('/getRequirements', requirementController.getAllRequirements);

// Get a single requirement by ID
router.get('/findRequirement:id', requirementController.getRequirementById);

// Update a requirement
router.put('/updateRequirement:id', requirementController.updateRequirement);

// Delete a requirement
router.delete('/deleteRequirement:id', requirementController.deleteRequirement);


// Update the priority of a requirement
router.patch('/updatePriority:id/priority', requirementController.updatePriority);

// Update the deadline of a requirement
router.patch('/updateDeadline:id/deadline', requirementController.updateDeadline);


// Upload an attachment to a requirement
router.post('/uploadAttachment:id/attachments', requirementController.uploadAttachment);


// Add a comment to a requirement
router.post('/addComment:id/comments', requirementController.addComment);

// Get all comments of a requirement
router.get('/getComments:id/comments', requirementController.getAllComments);


module.exports = router;
