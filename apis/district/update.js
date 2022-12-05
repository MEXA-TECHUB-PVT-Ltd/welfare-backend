const express = require('express')
const app = express()
const { districtModel } = require('../../schemas')

const UpdateEvent = app.put('/', (req, res) => {
    const updateData = {
        name: req.body.name,
       
    }
    const options = {
        new: true
    }
    districtModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateEvent