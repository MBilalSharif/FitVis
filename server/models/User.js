const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { 
    type: String, 
    enum: ['user', 'trainer', 'admin'], 
    required: true,
    default: 'user'
  },
  trainerDetails: {
    certificates: [{
      name: String,
      issuingOrganization: String,
      issueDate: Date,
      expiryDate: Date,
      certificateId: String,
      certificateFile: String
    }],
    specialization: [String],
    yearsOfExperience: Number,
    bio: String
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);