const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  team_lead_id: {
    type: String,
    required: true,
  },
  student_name: {
    type: String,
    required: true,
  },
  student_email: {
    type: String,
    required: true,
    unique: true,
  },
  student_status: {
    type: String,
    required: true,
  },
  requirements: {
      type: Array,
    },
  

});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
