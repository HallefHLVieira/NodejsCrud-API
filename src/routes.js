// Importando dependências necessárias
// Importing required dependencies 
const express = require('express');
const routes = express.Router();

// Importation of the controller
// Importação do controlador
const ContactController = require ('./controllers/ContactController');

// My routes for operation crud
// Minhas rotas para funcionamento do crud

// To list all objects
// Listar todos os objetos
routes.get("/contacts", ContactController.index);

// To list object through of id
// Para listar um objeto pelo id
routes.get("/contacts/:id", ContactController.show);

// To save one object
// Para salvar um objeto
routes.post("/contacts", ContactController.store);

// To update one object trough of id
// Para atualizar um objeto pelo id
routes.put("/contacts/:id", ContactController.update);

// To delete one object selected
// To deletar obejto escolhido
routes.delete("/contacts/:id", ContactController.destroy);

// Exports my routes
// Exportando minhas rotas
module.exports = routes;