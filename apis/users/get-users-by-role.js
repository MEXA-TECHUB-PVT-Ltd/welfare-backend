const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetUsersByRole = app.get('/', (req, res) => {
    usersModel.find({ role: req.query.role }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUsersByRole