const express = require('express')
const app = express()
const { reportsModel } = require('../../schemas')

const GetEventsByCategory = app.get('/', (req, res) => {
    reportsModel.find({ date: req.query.date }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate('department').populate('reportBy')
})
module.exports = GetEventsByCategory