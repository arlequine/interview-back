const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { interviewController } = require('../controllers');
const { createInterview } = interviewController


router.post('/', async (req, res) => {
  const body = req.body;

  try {
    const newInterview = await createInterview(body);
    res.status(201)
    res.send({
      message: 'Tu entrevista ha sido creada exitosamente, nos pondremos en contacto contigo a la brevedad',
      data: newInterview
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