const ProductModel = require("../db/product.schema")
let controller = {}

controller.create = async (req, res)=>{

    try{

        const product = new ProductModel(req.body)
        const productCreateResponse = await product.save()

        // const data = await ProductModel.find({})

        res.json({status:true, data:productCreateResponse}).status(201)



    }catch(err){
        res.json({status:false, error:err}).status(201)
        console.log(`File:createController, Fun:create, Error:${err}`)
    }



}




module.exports = controller