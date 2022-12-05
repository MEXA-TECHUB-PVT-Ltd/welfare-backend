const express = require('express')
const app = express()
const { eventsModel } = require('../../schemas')

const GetEventsByCategory = app.get('/', (req, res) => {
    eventsModel.find({ category: req.query.category }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ date: -1 })
})
module.exports = GetEventsByCategory