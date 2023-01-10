const express = require('express')
const app = express()
const { requestModel } = require('../../schemas')

const UpdateEvent = app.put('/', (req, res) => {
    const updateData = {
        approvalStatus:req.body.approvalStatus
    }
    const options = {
        new: true
    }
    requestModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateEvent