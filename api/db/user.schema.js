const mongoose = require('mongoose')

let schema = new mongoose.Schema({

    firstName:
    {
        type: String,
        required: true
    },

    lastName : String,
	username:{
        type: String,
        unique: true
    },
	password:String,
	isAdmin:{
        type: Boolean,
        default : false
    },
	email:{
        type: String,
        unique: true
    },

 phone:Number
})

// creating the User collection
let UserModel = mongoose.model("User", schema)

module.exports = UserModel