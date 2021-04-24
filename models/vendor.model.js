const mongoose = require('mongoose');
const{Schema, model} = mongoose;

const vendorSchema = new Schema({

    username : {type: String, required : true, unique : true},
    email: {type: String, required : true},
    password : {type: String, required : true},
    vendorname : {type: String, required : true},
    image: {type: String, default: ''},
    location : {type: String, required : true, enum: ['mobile','solid']},
    category: {type: String, required : true, enum: ['products', 'services']}, // dropdown para categorias
    active: {type:Boolean, default : true},
    //role:{type: String, enum :['owner', 'partner'] },
    // showtimes : [{type: String}],

},
{
    timestamps: true,   
});

const Vendor = model('vendor', vendorSchema)

module.exports = Vendor;