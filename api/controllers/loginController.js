const jwt = require('jsonwebtoken')
const UserModel = require('../db/user.schema')
const controller = {}

controller.login = async (req, res)=>{

    try{
        const userRecord = await UserModel.find({username: req.body.username})
    if(userRecord.length !==0)
    {
       const token =  jwt.sign({username: req.body.username}, "This is Secret", {expiresIn: 60 * 1000})

       res.json({status:true, token: token})
    }
    else
    {
        res.json({status:false, message:"Wrong Credentials!"})
    }
    }catch(err){

        console.log(`File:loginController, Fun:login, Error:${err}`)

    }




}

controller.isAuthenticated = async (req, res, next)=>{

    try{

        const token = req.headers.authtoken

       jwt.verify(token, "This is Secret", (err, data)=>{
           if(err){
               res.json({status:false, message: "Invalid Token"})
           }
           else
           {
               req.body.username = data.username
               next()
           }

       })
    }catch(err){
        console.log(`File:loginController, Fun:isAuthenticated, Error:${err}`)
    }



}

controller.isAdmin = async (req, res, next)=>{

    try{

        const userRecord = await UserModel.find({username: req.body.username})
        console.log(userRecord)
        const isAdmin = userRecord[0].isAdmin
        if (isAdmin === true)
        {
            next()
        }
        else
        {
            res.json({status:false, message:"Not An Administrator!"})
        }

    }catch(err){
        console.log(`File:loginController, Fun:isAdmin, Error:${err}`)

    }
}


module.exports = controller