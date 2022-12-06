const express = require('express')
const app = express()
const { Monthlyreport } = require('../../schemas')

const DeleteReport = app.delete('/', (req, res) => {
    Monthlyreport.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteReport