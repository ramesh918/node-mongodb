const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:String,
	manufacturer: String,
	serialNumber : {
        type: String,
        unique: true
    },
    username:{
        type: String,
        required: true
    },
    display:{
        type: Boolean,
        required: true,
        default: true
    }






})


let ProductModel = mongoose.model('Produt', productSchema)

module.exports = ProductModel