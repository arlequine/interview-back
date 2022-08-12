const InterviewModel = require('../models/interviewModel');

const createInterview = async (data) => {
  const interview = new InterviewModel(data);
  return interview.save();
}

module.exports = {
  createInterview
}
