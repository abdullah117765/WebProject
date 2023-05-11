const express = require('express');
const router = express.Router();
const teamMemberController = require('../controller/teamMemberController.js');

// Add a team member
router.post('/addMember', teamMemberController.addTeamMember);

// Delete a team member
router.delete('/deleteMember:id', teamMemberController.deleteTeamMember);

// Get all team members
router.get('/getMembers', teamMemberController.getAllTeamMembers);

// Get a team member by ID
router.get('/findMember:id', teamMemberController.getTeamMemberById);

// Assign a role to a team member
router.patch('/assignRole:id/role', teamMemberController.assignRoleToTeamMember);

// Assign the above requirements to a team member
router.patch('/assignReq:id/requirements', teamMemberController.assignRequirementsToTeamMember);


module.exports = router;
