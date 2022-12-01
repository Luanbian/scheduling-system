const AppointmentService = require('../services/appointment.service')

module.exports = class AppointmentController {

    static async create (req, res) {
        const status = await AppointmentService.create(
            req.body.name,
            req.body.email,
            req.body.description,
            req.body.cpf,
            req.body.date,
            req.body.time
        )
        if (status) {
            res.send('Tudo certo')
        } else {
            res.send("Algo deu errado")
        }
    }

}
