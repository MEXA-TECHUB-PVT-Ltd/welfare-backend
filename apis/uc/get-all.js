const express = require('express')
const app = express()
const { ucModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    ucModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers