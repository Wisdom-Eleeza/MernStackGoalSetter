const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const getGoals = async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json({message: 'Get goals'})
}

const createGoals = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    // res.status(200).json({message: 'Create goal'})
})

const updateGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

const deleteGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}) 





module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals,
}