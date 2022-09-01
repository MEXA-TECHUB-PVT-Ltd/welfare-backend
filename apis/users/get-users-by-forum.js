const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetUsersByForum = app.get('/', (req, res) => {
    usersModel.find({ forum: req.query.forum }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUsersByForum