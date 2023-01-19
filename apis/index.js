const express = require('express')
const router = express.Router()

const interviewsRouter = require('./interviews')
const studentsRouter = require('./students')

router.use('/interview', interviewsRouter)
router.use('/student', studentsRouter)

module.exports = router;