const express = require("express");
const app = express()
const repository = require('./src/repository/repositoryPet')
app.use(express.json())

app.get('/pets', async (req, res) => {
    const pets = await repository.listar()
    res.send(pets)
})

app.post('/pets', (req, res) => {
    const pet = req.body
    repository.inserir(pet)
    res.send('Pet inserido')
})

app.get('/pets/:id', async (req, res) => {
    const idPet = req.params.id
    const pet = await repository.buscarId(idPet)
    res.send(pet)
})

app.put('/pets/:id', async (req, res) => {
    const idPet = req.params.id
    const pet = req.body
    await repository.atualizar(idPet, pet)
    res.send('Pet atualizado')
})

app.delete('/pets/:id', async (req, res) => {
    const idpet = req.params.id
    await repository.apagar(idpet)
    res.send('Pet deletado')
})

app.listen(3000, () => console.log('Está rodando sem erro'))