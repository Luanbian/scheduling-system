const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send('oi')
})

router.get('/cadastre', (req, res) => {
    res.render("create")
})

module.exports = router