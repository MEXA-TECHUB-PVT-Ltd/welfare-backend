const express = require('express')
const app = express()
const { userUcGroupModel } = require('../../schemas')

const GetUser = app.get('/', (req, res) => {
    userUcGroupModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate('DistrictArea').populate('PPArea').populate('UCArea')
})
module.exports = GetUser