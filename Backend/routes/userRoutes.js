const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUserFromDatabase } = require('../controller/userController')
const { protectedRoute } = require('../middleware/authMiddleware')



router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protectedRoute, getUserFromDatabase)



module.exports = router