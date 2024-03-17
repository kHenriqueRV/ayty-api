const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const router = require('./Routes/Router')

const app = express()


const dbUri = process.env.DB_URI

mongoose.connect(dbUri, {
    useUnifiedTopoLogy: true,
    useNewUrlParser: true,
}).then(() => {
    console.log('Conectado com sucesso');
    app.listen(777, () => console.log('Servidor iniciado na porta 777 skr skr'));
}).catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use(router)