const express = require('express')
const app = express()
const { library } = require('../../schemas')

const DeleteEvent = app.put('/', (req, res) => {
    library.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteEvent