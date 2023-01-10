const express = require('express')
const app = express()
const { userUcGroupModel } = require('../../schemas')

const UpdateUser = app.put('/', (req, res) => {
    const updateData = {
        mobileWhatsapNo:req.body.mobileWhatsapNo,
        email:req.body.email,
        GroupRoles:req.body.GroupRoles,
    }
    const options = {
        new: true
    }
    userUcGroupModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
   
})
module.exports = UpdateUser