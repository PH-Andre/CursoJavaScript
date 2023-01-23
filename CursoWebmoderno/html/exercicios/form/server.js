const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({extended: true}))

app.post('/usuario', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuario Incluido</h1>')
})

app.post('/usuario/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003)