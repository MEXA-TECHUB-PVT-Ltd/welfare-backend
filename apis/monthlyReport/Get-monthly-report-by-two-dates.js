
const express = require('express')
const app = express()
const { Monthlyreport } = require('../../schemas')

const GetEventsByCategory = app.post('/', (req, res) => {
    Monthlyreport.find({ created_date: { $gte: req.body.sdate, $lt: req.body.edate } }, function (err, foundResult) {
        try {
            res.json(foundResult)
        } catch (err) {
            res.json(err)
        }
    }).populate('userId').populate('department').populate('DistrictArea').populate('PPArea').populate('UCArea').populate('UnitArea')

})
module.exports = GetEventsByCategory