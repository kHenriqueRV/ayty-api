const mongoose = require('mongoose');


const modelo_contrato = new mongoose.Schema({
    id: { type: Number, required: false, unique: true ,default: 1},
    nomeCliente: { type: String, required: true },
    dataCriacao: { type: Date, required: false},
    descricao: { type: String, required: true },
    estado: { type: String, enum: ['negociacao', 'finalizado', 'aprovado'], default: 'negociacao' }
}
);

modelo_contrato.path('dataCriacao').validate(async function (value) {
    if (value == null)
    
    this.dataCriacao = (Date.now())
})
async function gerarID() {
    const ultimoContrato = await contratos.findOne().sort({ id: -1 });
    return ultimoContrato ? ultimoContrato.id + 1 : 1;
}

modelo_contrato.path('id').validate(async function (value) {
    if (value == null || value == undefined) {

        this.id = await gerarID();
    }
}, 'não foi possivel gerar ID');



const contratos = mongoose.model('contrato', modelo_contrato);

module.exports = contratos;