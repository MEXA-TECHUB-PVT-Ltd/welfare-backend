const express = require('express')
const app = express()
const { reportsModel } = require('../../schemas')

const GetReport = app.get('/', (req, res) => {
    reportsModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetReport