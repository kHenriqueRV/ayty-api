const contratos = require('../Model/Contract_Model');

exports.lerContratos = async(req, res) => {
    try {
        const meusContratos = await contratos.find();
        if (meusContratos == null) {
                res.status(404).json({message: 'Nenhum contrato encontrado no banco de dados'})
        }
        res.status(200).json(meusContratos);
        console.log('dados enviados:', meusContratos)
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

exports.criarContrato = async (req, res) => {
    try {
        // Log dos dados recebidos
        console.log('Dados recebidos na solicitação POST:', req.body);

        // Criar o contrato com os dados recebidos
        const novoContrato = await contratos.create(req.body);

        // Enviar o contrato criado como resposta
        res.status(201).json(novoContrato);
    } catch (error) {
        // Enviar mensagem de erro em caso de falha
        res.status(400).json({ message: error.message });
    }
};
exports.editarContrato = async (req, res) => {
    try {
        const { id } = req.params;
        const { descricao } = req.body;

        const contrato = await contratos.findByIdAndUpdate(id, { descricao: descricao }, { new: true });

        if (!contrato) {
            return res.status(404).json({ message: 'Contrato não encontrado' });
        }
        res.status(202).json({ message: 'Contrato atualizado com sucesso' });
    }

    catch(error) {
        res.status(500).json({message: error.message})
    }
};

exports.deletarContrato = async(req, res) => {
    try {
        const { id } = req.params;

        const contrato = await contratos.findByIdAndDelete(id);

        if (!contrato) {
            return res.status(400).json({message: 'Contrato não encontrado'});
        }
        res.status(202).json({message: 'Contrato deletado com sucesso'})
    } catch(error) {
        res.status(500).json({message: error.message})
    }
};