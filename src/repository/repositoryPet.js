const modelPet = require('../model/modelPets')

module.exports = {
    async listar(){
        return await modelPet.findAll({raw:true})
    },

    inserir(pet){
        return modelPet.create(pet)
    },

    async buscarId(id){
        return await modelPet.findOne({
            where:{
                idpets: id
            }
        })
    },

    atualizar(id, pet){
        return modelPet.update(pet,{
            where:{
                idpets: id
            }
        })
    },

    apagar(id){
        return modelPet.destroy({
            where:{
                idpets: id
            }
        })
    }
}