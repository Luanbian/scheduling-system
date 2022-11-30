const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.send('oi')
})

app.get('/cadastro', (req, res) => {
    res.render("create")
})

mongoose.connect('mongodb://127.0.0.1:27017/sisage')

app.listen(8080, () => {console.log('server running..')})