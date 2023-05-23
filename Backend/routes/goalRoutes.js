const express = require('express')
const router = express.Router()
const { getGoals, createGoals, updateGoals, deleteGoals } = require('../controller/goalController')


// short code cos the routes are the same so it can be done like ...
router.route('/').get(getGoals).post(createGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

// @desc Get gaols
// @route GET /api/goals
// @access Private
// router.get('/', getGoals)
// router.post('/', createGoals)
// router.put('/:id', updateGoals)
// router.put('/:id', deleteGoals)


module.exports = router