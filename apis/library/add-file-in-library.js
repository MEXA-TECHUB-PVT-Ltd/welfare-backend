const express = require('express')
const app = express()
const { library } = require('../../schemas')

const CreatelibraryAdd = app.post('/', (req, res) => {
    const libraryAdd = new library({
        path:req.body.path,
        name:req.body.name


    })
    libraryAdd.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreatelibraryAdd