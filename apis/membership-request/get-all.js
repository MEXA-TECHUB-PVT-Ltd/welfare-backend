const express = require('express')
const app = express()
const { requestModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    requestModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers