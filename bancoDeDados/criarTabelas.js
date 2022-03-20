const modelos = [
    require('../model/Pets')
]

function criarTabela() {
    for (let index = 0; index < modelos.length; index++) {
        const modelo = modelos[index];
        modelo.sync()
    }
}
criarTabela()