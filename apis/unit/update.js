const express = require('express')
const app = express()
const { unitModel} = require('../../schemas')

const UpdateEvent = app.put('/', (req, res) => {
    const updateData = {
        name: req.body.name,
       
    }
    const options = {
        new: true
    }
    unitModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateEvent