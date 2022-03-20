const express = require("express");
const app = express()
const controllerPets = require('./src/controller/controllerPet')
const controllerResponsavel = require('./src/controller/controllerResponsavel')

app.use(express.json())

app.use('/pets', controllerPets)

app.use('/responsavel', controllerResponsavel)

app.listen(3000, () => console.log('Está rodando sem erro'))