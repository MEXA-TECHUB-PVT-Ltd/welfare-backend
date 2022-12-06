const express = require('express')
const app = express()
const { usersModel } = require('../../schemas')

const UpdateUser = app.put('/', (req, res) => {
    const UserId =req.body._id

    usersModel.findById(UserId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const updateData = {
                email: req.body.email,
                name: req.body.name,
                dob: req.body.dob,
                profession: req.body.profession,
                city: req.body.city,
                userType: req.body.userType,
                DistrictArea:req.body.DistrictArea,
                PPArea:req.body.PPArea,
                UCArea:req.body.UCArea,
                UnitArea:req.body.UnitArea,
                gender: req.body.gender,
                forum: req.body.forum,
                role: req.body.role,
                department: req.body.department,
            }
            const options = {
                new: true
            }
            usersModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                }
            })
        }
    })
   
})
module.exports = UpdateUser