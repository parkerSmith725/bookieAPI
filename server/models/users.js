const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    firstName:{
        type:String
    }
}); 

var User = mongoose.model('User',UserSchema);

module.exports = {
    User
};