const express = require('express')
const app = express()
const { districtModel } = require('../../schemas')

const GetEvent = app.get('/', (req, res) => {
    districtModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetEvent