const nodemailer = require('nodemailer');
const Email = require('../model/emailModel.js');


const sendEmail = async (req, res) => {
    try {
       sender1=req.body.sender
       recipient1=req.body.recipient
       subject1=req.body.subject
       text1 =req.body.text
      // Create a Nodemailer transporter and send the email
      // ...
  
      // Save the sent email to the database
      const email = new Email({
        sender: sender1,
        recipient: recipient1,
        subject :subject1,
        text: text1,
      });
      await email.save();
  
      res.json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  };

  
  // Controller function to fetch all emails sent by a user
const getEmailsSentByUser = async (req, res) => {
    try {
      const { sender } = req.params;
      const emails = await Email.find({ sender });
      res.json(emails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch sent emails' });
    }
  };
  
  // Controller function to fetch all emails received by a user
  const getEmailsReceivedByUser = async (req, res) => {
    try {
      const { recipient } = req.params;
      const emails = await Email.find({ recipient });
      res.json(emails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch received emails' });
    }
  };
  

  module.exports = {
    sendEmail,
    getEmailsReceivedByUser,
    getEmailsSentByUser,
  };