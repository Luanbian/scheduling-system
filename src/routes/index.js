const express = require('express')
const router = express.Router()

router.use('/api', require('./age.routes'))

module.exports = router