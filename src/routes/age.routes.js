const express = require('express')
const AppointmentController = require('../controllers/Appointment.controller')
const router = express.Router()

router.get("/", (req, res) => {
    res.send('oi')
})

router.get('/cadastre', (req, res) => {
    res.render("create")
})

router.post('/create', AppointmentController.create)

module.exports = router