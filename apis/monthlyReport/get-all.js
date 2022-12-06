const express = require('express')
const app = express()
const { Monthlyreport } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    Monthlyreport.find({},null,{sort:{created_date:-1}}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers