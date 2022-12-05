const express = require('express')
const app = express()
const { reportsModel, usersModel } = require('../../schemas')

const CreateReport = app.post('/', (req, res) => {
    const reportId = Math.floor(100000 + Math.random() * 900000)
    const UserId = req.body.reportBy;
    usersModel.findById(UserId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const userType = result.userType;
            const department = result.department;
            const role = result.role;
            if (role == 'General Secretary') {
                const report = new reportsModel({
                    reportId: reportId,
                    reportBy: req.body.reportBy,
                    title: req.body.title,
                    userType: userType,
                    department: department,
                    eventCategory: req.body.eventCategory,
                    description: req.body.description,
                    UserRole: role,
                    ReportCategory: "Meeting",
                    location: req.body.location,
                    date: req.body.date,
                    time: req.body.time,
                    images: req.body.images,
                })
                report.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            } else {
                const report = new reportsModel({
                    reportId: reportId,
                    reportBy: req.body.reportBy,
                    title: req.body.title,
                    userType: userType,
                    department: department,
                    eventCategory: req.body.eventCategory,
                    description: req.body.description,
                    UserRole: role,
                    ReportCategory: "Event",
                    location: req.body.location,
                    date: req.body.date,
                    time: req.body.time,
                    images: req.body.images,
                })
                report.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            }



        }
    })

})
module.exports = CreateReport