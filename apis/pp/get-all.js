const express = require('express')
const app = express()
const { ppModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    ppModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers