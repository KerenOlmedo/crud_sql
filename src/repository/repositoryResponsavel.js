const modelResponsavel = require('../model/modelResponsavel')

module.exports = {
    async listar(){
        return await modelResponsavel.findAll({raw: true})
    },

    inserir(responsavel){
        return modelResponsavel.create(responsavel)
    },

    async buscarEmail(email){
        return await modelResponsavel.findOne({
            where:{
                email: email
            }
        })
    },

    atualizar(id, responsavel){
        return modelResponsavel.update(responsavel,{
            where:{
                idResponsavel: id
            }
        })
    },

    apagar(id){
        return modelResponsavel.destroy({
            where: {
                idResponsavel:id
            }
        })
    }
}