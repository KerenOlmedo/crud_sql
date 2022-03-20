const Pets = require('../model/Pets')

module.exports = {
    listar(){
        return Pets.findAll({raw:true})
    },

    inserir(pet){
        return Pets.create(pet)
    },

    buscarId(id){
        const petEncontrado = Pets.findOne({
            where:{
                idpets: id
            }
        })
        if (!petEncontrado) {
            throw new Error('Pet não encontrado')
        }
        return petEncontrado
    },

    atualizar(id, pet){
        return Pets.update(pet,{
            where:{
                idpets: id
            }
        })
    },

    apagar(id){
        return Pets.destroy({
            where:{
                idpets: id
            }
        })
    }
}