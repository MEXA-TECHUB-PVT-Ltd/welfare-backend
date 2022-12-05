const express = require('express')
const app = express()
const { unitModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    unitModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers