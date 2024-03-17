const express = require('express')
const cors = require('cors');

const controller_contratos = require('../Controller/Controller_contratos')
const bodyParser = require('body-parser');
const routes = express.Router();

routes.use(cors());
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

routes.delete('/contratos/:id', controller_contratos.deletarContrato);

routes.get('/contratos', controller_contratos.lerContratos);

routes.post('/contratos', controller_contratos.criarContrato);

routes.put('/contratos/:id', controller_contratos.editarContrato);

module.exports = routes