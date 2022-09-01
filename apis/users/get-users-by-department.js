const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetUsersByDepartment = app.get('/', (req, res) => {
    usersModel.find({ department: req.query.department }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUsersByDepartment