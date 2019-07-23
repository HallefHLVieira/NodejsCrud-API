// Importando dependências necessárias
// Importing required dependencies 
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// To Define my table of object with your atributes and your types
// Definir minha tablea de objetos com seus atributos e seus tipos
const ContactSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    age:{
        type:String,
        required: true,
    },
    number:{
        type:String,
        required: true,
    },
    adress:{
        type:String,
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },

});
// Apply pagination
// Atribuindo paginação
ContactSchema.plugin(mongoosePaginate);

// To define model
// Definindo o modelo
mongoose.model('Contact',ContactSchema);