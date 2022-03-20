const Sequelize = require('sequelize');
const instancia = require('../../bancoDeDados/dados');

const colunasPet = {
    idpets: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    raca:{
        type: Sequelize.STRING,
        allowNull: true
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: false
    }
};

const opcoes = {
    tableName: 'pets',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao'
};

module.exports = instancia.define('pets', colunasPet, opcoes);