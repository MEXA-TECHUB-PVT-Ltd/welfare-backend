const express = require('express')
const app = express()
const { Monthlyreport } = require('../../schemas')

const GetEventsByCategory = app.get('/', (req, res) => {
    Monthlyreport.find({ created_date: req.query.created_date }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate('department').populate('DistrictArea').populate('PPArea').populate('UCArea').populate('UnitArea')
})
module.exports = GetEventsByCategory