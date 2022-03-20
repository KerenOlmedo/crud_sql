const router = require('express').Router()
const repository = require('../repository/repositoryPet')

router.get('/', async (req, res) => {
    const pets = await repository.listar()
    res.send(pets)
})

router.post('/', (req, res) => {
    const pet = req.body
    repository.inserir(pet)
    res.send('Pet inserido')
})

router.get('/:id', async (req, res) => {
    const idPet = req.params.id
    const pet = await repository.buscarId(idPet)
    res.send(pet)
})

router.put('/:id', async (req, res) => {
    const idPet = req.params.id
    const pet = req.body
    await repository.atualizar(idPet, pet)
    res.send('Pet atualizado')
})

router.delete('/:id', async (req, res) => {
    const idpet = req.params.id
    await repository.apagar(idpet)
    res.send('Pet deletado')
})

module.exports = router