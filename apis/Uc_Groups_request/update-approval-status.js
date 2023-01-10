const express = require('express')
const app = express()
const { UcGroupsrequestModel } = require('../../schemas')

const UpdateEvent = app.put('/', (req, res) => {
    const updateData = {
        ApprovedStatus:req.body.ApprovedStatus
    }
    const options = {
        new: true
    }
    UcGroupsrequestModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateEvent