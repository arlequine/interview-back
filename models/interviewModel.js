const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const interviewSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});

const InterviewModel = model('ucamper', interviewSchema);


module.exports = InterviewModel;