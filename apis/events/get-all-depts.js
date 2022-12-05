const express = require('express')
const app = express()
const { departmentModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    departmentModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1})
})
module.exports = GetAllUsers