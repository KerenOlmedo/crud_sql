const express = require("express");
const app = express()
const Pets = require('./repositorio/Pets')
app.use(express.json())

app.get('/pets', async (req, res) => {
    const pets = await Pets.listar()
    res.send(pets)
})

app.post('/pets', (req, res) => {
    const pet = req.body
    Pets.inserir(pet)
    res.send('Pet inserido')
})

app.get('/pets/:id', async (req, res) => {
    const idPet = req.params.id
    const pet = await Pets.buscarId(idPet)
    res.send(pet)
})

app.put('/pets/:id', async (req, res) => {
    const idPet = req.params.id
    const pet = req.body
    await Pets.atualizar(idPet, pet)
    res.send('Pet atualizado')
})

app.delete('/pets/:id', async (req, res) => {
    const idpet = req.params.id
    await Pets.apagar(idpet)
    res.send('Pet deletado')
})

app.listen(3000)