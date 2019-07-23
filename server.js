// Importando dependências necessárias
// Importing required dependencies 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// My variables connections
// Minhas variáveis de conexões
modelsURL = "./src/models/";
mongoURL = "mongodb://localhost:7001/nodeapi";
routesURL = "./src/routes";

// Init aplication
// Inicializando aplicação
const app = express();
app.use(express.json());
app.use(cors());

// Init connection for database
// Inicializando conexão com banco
mongoose.connect(
    mongoURL,
    { useNewUrlParser: true }
);

// Conection for all models of the aplication
// Conexão com todos os modelos da aplicação
requireDir(modelsURL);

// Conection with file routes
// Conexão para arquivo de rotas
app.use('/api', require(routesURL));

// Port chosen for run application
// Porta escolhida para rodar a aplicação
app.listen(7000);