const express = require('express')
const app = express()
const { ppModel } = require('../../schemas')

const CreateDept = app.post('/', (req, res) => {
    const dept = new ppModel({
        name: req.body.name,
    })
    dept.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateDept