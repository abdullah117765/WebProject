const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Send email
router.post('/send', emailController.sendEmail);

// Get all emails sent by a user
router.get('/sent/:sender', emailController.getEmailsSentByUser);

// Get all emails received by a user
router.get('/received/:recipient', emailController.getEmailsReceivedByUser);



module.exports = router;
