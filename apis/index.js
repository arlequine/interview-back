const express = require('express')
const router = express.Router()

const interviewsRouter = require('./interviews')

router.use('/interview', interviewsRouter)

module.exports = router;