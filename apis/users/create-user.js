const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { usersModel } = require('../../schemas')

const CreateUser = app.post('/', (req, res) => {

    if (req.body.role === 'General Secretary' || req.body.role === 'President') {
        usersModel.find({ forum: req.body.forum, role: req.body.role, department: req.body.department, userType: req.body.userType }, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send({ data: result, message: 'Already Exist President or General Secretary for this department,forum,userRole' })

            }
        })
    } else {

        usersModel.find({ email: req.body.email }, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                if (result.length === 0) {
                    const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
                    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
                    const userType = req.body.userType;
                    if (userType == 'District') {

                            console.log("not empty")
                            const user = new usersModel({
                                image: req.body.image,
                                email: req.body.email,
                                password: hashedPassword,
                                session: session,
                                name: req.body.name,
                                dob: req.body.dob,
                                profession: req.body.profession,
                                city: req.body.city,
                                userType: req.body.userType,
                                DistrictArea: req.body.DistrictArea,
                                gender: req.body.gender,
                                forum: req.body.forum,
                                role: req.body.role,
                                department: req.body.department,
                            })
                            user.save((error, result) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    res.send(result)
                                }
                            })
                        

                    } else if (userType == 'Province') {
                            const user = new usersModel({
                                image: req.body.image,
                                email: req.body.email,
                                password: hashedPassword,
                                session: session,
                                name: req.body.name,
                                dob: req.body.dob,
                                profession: req.body.profession,
                                city: req.body.city,
                                userType: req.body.userType,
                                DistrictArea: req.body.DistrictArea,
                                PPArea: req.body.PPArea,
                                gender: req.body.gender,
                                forum: req.body.forum,
                                role: req.body.role,
                                department: req.body.department,
                            })
                            user.save((error, result) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    res.send(result)
                                }
                            })
                        

                    } else if (userType == 'UC') {
                            const user = new usersModel({
                                image: req.body.image,
                                email: req.body.email,
                                password: hashedPassword,
                                session: session,
                                name: req.body.name,
                                dob: req.body.dob,
                                profession: req.body.profession,
                                city: req.body.city,
                                userType: req.body.userType,
                                DistrictArea: req.body.DistrictArea,
                                PPArea: req.body.PPArea,
                                UCArea: req.body.UCArea,
                                gender: req.body.gender,
                                forum: req.body.forum,
                                role: req.body.role,
                                department: req.body.department,
                            })
                            user.save((error, result) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    res.send(result)
                                }
                            })
                        

                    } else if (userType == 'Unit') {
                            const user = new usersModel({
                                image: req.body.image,
                                email: req.body.email,
                                password: hashedPassword,
                                session: session,
                                name: req.body.name,
                                dob: req.body.dob,
                                profession: req.body.profession,
                                city: req.body.city,
                                userType: req.body.userType,
                                DistrictArea: req.body.DistrictArea,
                                PPArea: req.body.PPArea,
                                UCArea: req.body.UCArea,
                                UnitArea: req.body.UnitArea,
                                gender: req.body.gender,
                                forum: req.body.forum,
                                role: req.body.role,
                                department: req.body.department,
                            })
                            user.save((error, result) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    res.send(result)
                                }
                            })
                        

                    } else {
                        res.send("Invalid UserType")
                    }
                } else {
                    res.json("Email Already Exists")


                }


            }
        })
    }


})
module.exports = CreateUser