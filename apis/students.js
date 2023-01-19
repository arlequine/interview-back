const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { studentsController } = require('../controllers');
const { createStudent } = studentsController

router.post('/', async (req, res) => {
  const body = req.body;

  try {
    const newStudent = await createStudent(body);
    res.status(201)
    res.send({
      message: 'Felicidades has cumplido con el reto!!!',
      data: newStudent
    })
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400)
      return res.send({
        message: "Error de validacion",
        reason: error.message
      })
    }
    res.status(500)
    return res.send({
      message: error.message
    })
  }
})

module.exports = router;