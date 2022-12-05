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
                image:req.body.image,
                profession: req.body.profession,
                role:req.body.role
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