const express = require('express')
const app = express()
const { unitModel } = require('../../schemas')

const CreateDept = app.post('/', (req, res) => {
    const dept = new unitModel({
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