const express = require('express')
const app = express()
const { eventsModel } = require('../../schemas')

const UpdateEvent = app.put('/', (req, res) => {
    const updateData = {
        images: req.body.images,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        category: req.body.category,
        department: req.body.department,
    }
    const options = {
        new: true
    }
    eventsModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateEvent