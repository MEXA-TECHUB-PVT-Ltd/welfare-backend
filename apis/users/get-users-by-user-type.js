const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetUsersByUserType = app.get('/', (req, res) => {
    usersModel.find({ userType: req.query.userType }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate('DistrictArea').populate('PPArea').populate('UCArea').populate('UnitArea').populate('department')
})
module.exports = GetUsersByUserType