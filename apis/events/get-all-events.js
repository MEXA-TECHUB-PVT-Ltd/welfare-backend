const express = require('express')
const app = express()
const { eventsModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    eventsModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers