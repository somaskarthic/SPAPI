const express = require('express')

const {getUser}  = require('../controllers')

const router = express.Router()

//router.post('/user', userObj.)
router.use('/user' ,getUser.validateUser)

module.exports = router
