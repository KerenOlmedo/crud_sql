const repositorio = require('../repository/repositoryResponsavel')

module.exports = {
    async listar(email){
        if(email){
            const encontrado = await repositorio.buscarEmail(email)
            if(!encontrado){
                throw new Error('O email da busca não foi encontrado')
            }
            return encontrado.dataValues
        }
        return await repositorio.listar()
    },

    async inserir(responsavel){
        const buscaResponsavel = await repositorio.buscarEmail(responsavel.email)
        if(buscaResponsavel){
            throw new Error('O email cadastrado já está em uso')
        }
        return repositorio.inserir(responsavel)
    },

    async atualizar(email, dados){
        const responsavel = await repositorio.buscarEmail(email)
        if(!responsavel){
            throw new Error('responsavel não cadastrado')
        }
        return await repositorio.atualizar(responsavel.dataValues.idResponsavel, dados)
    },

    async delete(email){
        const responsavel = await repositorio.buscarEmail(email)
        if(!responsavel){
            throw new Error('responsavel não cadastrado')
        }
        return repositorio.apagar(responsavel.dataValues.idResponsavel)
    }
}