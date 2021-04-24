const mongoose = require('mongoose');
const{Schema, model} = mongoose;

const userSchema = new Schema({

    userName : {type: String, required : true, unique : true},
    email: {type: String, required : true},
    password : {type: String, required : true},
    image : {type: String},
    // description: {type: String},
    profession : {type: String},
    // birthDate:{type: Date},
    active: {type:Boolean, default : true},
    // role:{type: String, enum : true},
    // showtimes : [{type: String}],


},
{
    timestamps: true,   
});

const User = model('user', userSchema)

module.exports = User;