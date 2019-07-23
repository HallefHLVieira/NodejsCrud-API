// Importando dependências necessárias
// Importing required dependencies 
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Conection values for routes
// Conexão das rotas com as devidas funções
module.exports = {
    // To list
    async index(req,res){
        const { page = 1} = req.query;
        const products = await Product.paginate({},{ page, limit: 10 });
        return res.json(products);
    },
    // To list
    async show(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    // To save
    async store(req,res){
        const product = await Product.create(req.body);
        return res.json(product);
    },
    // To update
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        });
        return res.json(product);
    },
    // To delete
    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};