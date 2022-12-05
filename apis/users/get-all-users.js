const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    usersModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers