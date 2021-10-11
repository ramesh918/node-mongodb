const express = require('express')
const router = express.Router()

const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')
const createController = require('../controllers/createController')
const readController = require('../controllers/readController')
const updateController = require('../controllers/updateController')
const deleteController = require('../controllers/deleteController')


router.route('/register').post(registerController.register)
router.route('/login').post(loginController.login)

// every body can access  with token
router.route('/create').post(loginController.isAuthenticated, createController.create)
router.route('/read').get(loginController.isAuthenticated, readController.read)


router.route('/update/:id').post(loginController.isAuthenticated, updateController.update)
router.route('/delete/:id').delete(loginController.isAuthenticated, deleteController.delete)


// only admin
router.route('/user/update/:username').post(loginController.isAuthenticated, loginController.isAdmin, updateController.userUpdate)
router.route('/user/delete/:username').delete(loginController.isAuthenticated, loginController.isAdmin, deleteController.Userdelete)


module.exports = router