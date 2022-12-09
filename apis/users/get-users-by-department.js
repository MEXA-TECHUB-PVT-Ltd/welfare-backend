const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetUsersByDepartment = app.get('/', (req, res) => {
    usersModel.find({ department: req.query.department }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate('DistrictArea').populate('PPArea').populate('UCArea').populate('UnitArea').populate('department')
})
module.exports = GetUsersByDepartment