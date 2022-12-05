const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetUser = app.get('/', (req, res) => {
    usersModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate('DistrictArea').populate('PPArea').populate('UCArea').populate('UnitArea')
})
module.exports = GetUser