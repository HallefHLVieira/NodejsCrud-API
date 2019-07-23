// Importando dependências necessárias
// Importing required dependencies 
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

// Conection values for routes
// Conexão das rotas com as devidas funções
module.exports = {
    // To list
    async index(req,res){
        const { page = 1} = req.query;
        const contacts = await Contact.paginate({},{ page, limit: 10 });
        return res.json(contacts);
    },
    // To list
    async show(req,res){
        const contact = await Product.findById(req.params.id);
        return res.json(contact);
    },
    // To save
    async store(req,res){
        const contact = await Contact.create(req.body);
        return res.json(contact);
    },
    // To update
    async update(req,res){
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        });
        return res.json(contact);
    },
    // To delete
    async destroy(req,res){
        await Contact.findByIdAndRemove(req.params.id);
        return res.send();
    }
};