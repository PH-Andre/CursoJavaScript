const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({extended: true}))

app.post('/html', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(5500)