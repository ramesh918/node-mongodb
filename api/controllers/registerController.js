let controller = {}
let UserModel = require('../db/user.schema')

controller.register = async (req, res)=>{
 try {
    if(req.body.isAdmin === true)
    {
        const userRecord = await  UserModel.find({isAdmin:true})
        console.log(userRecord)
        if (userRecord.length === 0 )
        {
             const userRegistration = new UserModel(req.body)

            const response = await userRegistration.save()

            res.json({status:true, data:response}).status(201)

        }
        else
        {
            res.json({status:false, message:"admin already exist"})
        }
    }
    else
    {
        const userRegistration = new UserModel(req.body)

        const response = await userRegistration.save()

        res.json({status:true, data:response}).status(201)
    }
 }catch(err){

    console.log(`File:registerController, Fun:register, Error:${err}`)
 }










}




module.exports = controller