const express = require('express')
const app = express()
const { Monthlyreport } = require('../../schemas')

const GetMonthlyReport = app.get('/', (req, res) => {
    Monthlyreport.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetMonthlyReport