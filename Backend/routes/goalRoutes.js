const express = require('express')
const router = express.Router()
const { getGoals, createGoals, updateGoals, deleteGoals } = require('../controller/goalController')
const {protectedRoute} = require('../middleware/authMiddleware')


// short code cos the routes are the same so it can be done like ...
router.route('/').get(protectedRoute, getGoals).post( protectedRoute, createGoals)
router.route('/:id').put( protectedRoute, updateGoals).delete( protectedRoute, deleteGoals)

// @desc Get gaols
// @route GET /api/goals
// @access Private
// router.get('/', getGoals)
// router.post('/', createGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)


module.exports = router