const Sequelize = require('sequelize')
const instancia = require('../../bancoDeDados/dados')

const colunasResponsavel = {
    idResponsavel: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contato: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
};

const opcoes = {
    tableName: 'responsaveis',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao'
};

module.exports = instancia.define('responsaveis', colunasResponsavel, opcoes);