const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUserFromDatabase } = require('../controller/userController')



router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getUserFromDatabase)



module.exports = router