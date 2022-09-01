const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetUsersByUserType = app.get('/', (req, res) => {
    usersModel.find({ userType: req.query.userType }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUsersByUserType