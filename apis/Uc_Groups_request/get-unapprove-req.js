const express = require('express')
const app = express()
const { requestModel } = require('../../schemas')

const GetEventsByCategory = app.get('/', (req, res) => {
    requestModel.find({ approvalStatus: 'false' }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1})
})
module.exports = GetEventsByCategory