const router = require('express').Router()
const service = require('../service/serviceResponsavel')

router.get('/', async (req, res) => {
   try {
    const email = req.query.email
    const responsavel = await service.listar(email)
    res.json(responsavel).status(200) 
   } catch (error) {
       res.json(error.message).status(404)
   } 
})

router.post('/', async (req, res) =>{
    try {
       const responsavel = req.body
       await service.inserir(responsavel)
       res.json('Responsavel inserido').status(201)
    } catch (error) {
        res.json(error.message)
    }
})

router.put('/:email', async (req, res) => {
    try {
        const responsavel = req.body
        const email = req.params.email
        await service.atualizar(email, responsavel)
        res.json('Responsavel atualizado')
    } catch (error) {
        res.json(error.message)
    }
})

router.delete('/:email', async (req, res) => {
    try {
        const email = req.params.email
        await service.delete(email)
        res.json('Responsavel deletado')
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = router