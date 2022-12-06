const express = require('express')
const app = express()
const { reportsModel } = require('../../schemas')

const GetReportsByCategory = app.get('/', (req, res) => {
    reportsModel.find({ eventCategory: req.query.eventCategory }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1})
})
module.exports = GetReportsByCategory