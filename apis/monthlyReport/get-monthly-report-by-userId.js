const express = require('express')
const app = express()
const { Monthlyreport } = require('../../schemas')

const GetEventsByCategory = app.get('/', (req, res) => {
    Monthlyreport.find({ userId: req.query.userId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

})
module.exports = GetEventsByCategory