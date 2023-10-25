const express = require('express')
const router = express.Router()
const {home,register,Login} = require('../Controllers/userController.js')
router.get('/',home)
router.post('/register',register)
router.post('/login',Login)
module.exports = router