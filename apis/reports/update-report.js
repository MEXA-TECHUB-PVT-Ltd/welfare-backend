const express = require('express')
const app = express()
const { reportsModel } = require('../../schemas')

const UpdateReport = app.put('/', (req, res) => {
    const updateData = {
        title: req.body.title,
        userType: req.body.userType,
        department: req.body.department,
        eventCategory: req.body.eventCategory,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        images: req.body.images,
    }
    const options = {
        new: true
    }
    reportsModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateReport