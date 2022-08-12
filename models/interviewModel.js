const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const interviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  schedule: {
    type: String
  },
  github: {
    type: String,
    required: true
  }

}, {
  versionKey: false,
  timestamps: true
});

const InterviewModel = model('ucamper', interviewSchema);


module.exports = InterviewModel;