const express = require('express')
const app = express()
const { eventsModel } = require('../../schemas')

const CreateEvent = app.post('/', (req, res) => {
    const eventId = Math.floor(100000 + Math.random() * 900000)
    const event = new eventsModel({
        eventId: eventId,
        images: req.body.images,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        category: req.body.category,
        department: req.body.department,
    })
    event.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateEvent