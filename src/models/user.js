const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    cars:[{
        type: Schema.Types.ObjectId,
        ref:'Car'
    }], 
})

module.exports = mongoose.model('User',User);

