const express = require('express')
const app = express()
const { userUcGroupModel } = require('../../schemas')

const GetAllUsers = app.get('/', (req, res) => {
    userUcGroupModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({$natural:-1}).populate('DistrictArea').populate('PPArea').populate('UCArea')
})
module.exports = GetAllUsers