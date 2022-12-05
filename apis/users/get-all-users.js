const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    usersModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1}).populate('DistrictArea').populate('PPArea').populate('UCArea').populate('UnitArea')
})
module.exports = GetAllUsers