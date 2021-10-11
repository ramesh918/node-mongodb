const ProductModel = require('../db/product.schema')
const UserModel = require('../db/user.schema')
let controller = {}


controller.update = async (req, res) => {

  try {

    let id = req.params.id

    let record = await ProductModel.find({ _id: id })
    if (record.length === 0) {
      res.json({ status: false, message: "No Document Exist With id given" })
    }
    else {
      let product = {
        display: req.body.display,
        name: req.body.name ? req.body.name : record[0].name,
        manufacturer: req.body.manufacturer ? req.body.manufacturer : record[0].manufacturer,
        serialNumber: req.body.serialNumber ? req.body.serialNumber : record[0].serialNumber
      }

      let updateResponse = await ProductModel.updateOne({ _id: id }, product)

      res.json({ stats: true, data: updateResponse })


    }


  } catch (err) {

    console.log(`File:updateController, Fun:update, Error: ${err}`)
    res.json({ status: false, error: err })

  }


}

controller.userUpdate = async (req, res) => {

  try {

    let username = req.params.username

    let record = await UserModel.find({ username: username })
    if (record.length === 0) {
      res.json({ status: false, message: "No Document Exist With username given" })
    }
    else {
      let user = {

        firstName: req.body.firstName ? req.body.firstName : record[0].firstName,
        lastName: req.body.lastName ? req.body.lastName : record[0].lastName,
        password: req.body.password ? req.body.password : record[0].password,

        email: req.body.email ? req.body.email : record[0].email,
        phone: req.body.phone ? req.body.phone : record[0].phone


      }

      let updateResponse = await UserModel.updateOne({ username: username }, user)

      res.json({ stats: true, data: updateResponse })


    }


  } catch (err) {

    console.log(`File:updateController, Fun:update, Error: ${err}`)
    res.json({ status: false, error: err })

  }


}





module.exports = controller