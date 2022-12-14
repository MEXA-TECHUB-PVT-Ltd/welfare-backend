const express = require('express')
const app = express()
const { reportsModel } = require('../../schemas')

const GetReportsByUser = app.get('/', (req, res) => {
    reportsModel.find({ reportBy: req.query.reportBy }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1}).populate('department').populate('reportBy')
})
module.exports = GetReportsByUser