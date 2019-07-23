// Importando dependências necessárias
// Importing required dependencies 
const express = require('express');
const routes = express.Router();

// Importation of the controller
// Importação do controlador
const ProductController = require ('./controllers/ProductController');

// My routes for operation crud
// Minhas rotas para funcionamento do crud

// To list all objects
// Listar todos os objetos
routes.get("/products", ProductController.index);

// To list object through of id
// Para listar um objeto pelo id
routes.get("/products/:id", ProductController.show);

// To save one object
// Para salvar um objeto
routes.post("/products", ProductController.store);

// To update one object trough of id
// Para atualizar um objeto pelo id
routes.put("/products/:id", ProductController.update);

// To delete one object selected
// To deletar obejto escolhido
routes.delete("/products/:id", ProductController.destroy);

// Exports my routes
// Exportando minhas rotas
module.exports = routes;