const express = require('express')
const app = express()
const { UcGroupsrequestModel } = require('../../schemas')

const GetEventsByCategory = app.get('/', (req, res) => {
    UcGroupsrequestModel.find({ ApprovedStatus: 'false' }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1})
})
module.exports = GetEventsByCategory