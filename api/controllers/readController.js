const UserModel = require('../db/user.schema')
const ProductModel = require('../db/product.schema')

let controller = {}


controller.read = async (req, res)=>{

    try{
        let username = req.body.username
        let userRecord = await UserModel.find({username: username})
        let isAdmin = userRecord[0].isAdmin
        if (isAdmin === true)
        {
            let allProducts = await ProductModel.find({})
            res.json({status:true, data:allProducts})
        }
        else
        {
            let products = await ProductModel.find({username:username})
            res.json({status:true, data:products})
        }
    }
    catch(err){
        console.log(`File:readController, Fun:read, Error:${err}`)
    }


}




module.exports = controller