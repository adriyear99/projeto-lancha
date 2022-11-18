// Constantes
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const model = require('./models')

let app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json)

let port = process.env.PORT || 3000
app.listen(port,(req,res) => {
    console.log('Servidor rodando')
})

// Routes
app.post('/barcos',async(req,res)=>{
    let reqs = await model.Barcos.create({
        'nome': req.body.nome,
        'foto': req.body.foto,
        'consumo': req.body.consumo,
        'idade': req.body.idade,
        'cooler': req.body.cooler,
        'tanque': req.body.tanque,
        'pessoas': req.body.pessoas,
        'peso': req.body.peso
    })
    if(reqs){
        res.send(JSON.stringify('Lista de barcos retornada com sucesso'))
    }
})