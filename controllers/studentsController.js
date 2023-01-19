const StudentModel = require('../models/studentsModel');

const createStudent = async (data) => {
  const student = new StudentModel(data);
  return student.save();
}

module.exports = {
  createStudent
}