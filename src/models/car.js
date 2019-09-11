const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    make:String,
    model:String,
    year:Number,
    seller:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
})


module.exports = mongoose.model('Car',CarSchema);
