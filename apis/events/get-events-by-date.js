const express = require('express')
const app = express()
const { eventsModel } = require('../../schemas')

const GetEventsByDepartment = app.get('/', (req, res) => {
    eventsModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ date: -1 })
})
module.exports = GetEventsByDepartment