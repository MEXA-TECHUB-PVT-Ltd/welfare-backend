const express = require('express')
const app = express()
const { districtModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    districtModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers