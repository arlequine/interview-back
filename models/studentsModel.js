const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  favoriteFood: {
    type: String,
    required: true,
  }
}, {
  versionKey: false,
  timestamps: true
});

const StudentModel = model('students', studentSchema);


module.exports = StudentModel;