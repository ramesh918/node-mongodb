const ProductModel = require('../db/product.schema')
const UserModel = require('../db/user.schema')
let controller = {}

controller.delete = async (req, res)=>{

    try{

        const deleteResponse = await ProductModel.deleteOne({_id:req.params.id})
        res.json({status: true, data:deleteResponse}).status(204)

    }catch(err){
        res.json({status:false})
console.log(`File:deleteController, Fun:delete, Error: ${err}`)
    }



}

controller.Userdelete = async (req, res)=>{

    try{

        const deleteResponse = await UserModel.deleteOne({username:req.params.username})
        res.json({status: true, data:deleteResponse}).status(204)

    }catch(err){
        res.json({status:false})
console.log(`File:deleteController, Fun:Userdelete, Error: ${err}`)
    }



}



module.exports = controller