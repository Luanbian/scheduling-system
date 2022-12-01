const mongoose = require('mongoose')
const appointment = require('../models/Appointment.model')

// iniciando o model
const modelAppo = mongoose.model('Appointment', appointment)

module.exports = class AppointmentService {
    static async create(name, email, description, cpf, date, time){
        const newAppo = new modelAppo({
            name, email, description, cpf, date, time, finished: false
        })
        try {
            await newAppo.save()
            return true
        } catch (err) {
            console.log(err)
        }
    }
}
