const express = require('express')
const app = express()
const { reportsModel } = require('../../schemas')

const GetReportsByCategory = app.get('/', (req, res) => {
    reportsModel.find({ ReportCategory: req.query.ReportCategory }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1}).populate('department').populate('reportBy')
})
module.exports = GetReportsByCategory