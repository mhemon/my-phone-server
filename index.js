const express = require('express')
const cors = require('cors')
const phones = require('./phones.json')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('my phone serverrrrrrrr')
})

app.get('/phone', (req, res) => {
    res.send(phones)
})

app.get('/phone/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const singleData = phones.find(phone => phone.id === id) || {}
    res.send(singleData)
})

app.listen(port, () =>{
    console.log(`response from phone server port = ${port}`)
})