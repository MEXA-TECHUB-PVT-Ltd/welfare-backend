const express = require('express')
const app = express()
const {  unitModel} = require('../../schemas')

const GetEvent = app.get('/', (req, res) => {
    unitModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetEvent