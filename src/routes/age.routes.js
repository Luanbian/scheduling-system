const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send('oi')
})

router.get('/cadastro', (req, res) => {
    res.render("create")
})

module.exports = router