const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const interviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  shcedule: {
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