const express = require('express')
const app = express()
const { userUcGroupModel } = require('../../schemas')

const DeleteUser = app.delete('/', (req, res) => {
    userUcGroupModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteUser