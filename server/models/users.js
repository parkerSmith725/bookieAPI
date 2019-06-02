const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    type:{
        type:String,
        enum:['Band','Event']
    }
}); 

var User = mongoose.model('User',UserSchema);

module.exports = {
    User
};