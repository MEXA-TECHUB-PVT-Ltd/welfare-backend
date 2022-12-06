const express = require('express')
const app = express()
const { districtModel } = require('../../schemas')

const DeleteEvent = app.delete('/', (req, res) => {
    districtModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteEvent