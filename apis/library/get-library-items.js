const express = require('express')
const app = express()
const { library } = require('../../schemas')

const GetAllUsers = app.post('/', (req, res) => {
    library.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1})
})
module.exports = GetAllUsers