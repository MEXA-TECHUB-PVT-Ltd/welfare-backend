const express = require('express')
const app = express()
const { Monthlyreport } = require('../../schemas')

const UpdateReport = app.put('/', (req, res) => {
    const updateData = {
        LifeTimeMembersTarget: req.body.LifeTimeMembersTarget,
        LifeTimeMembersAchieved: req.body.LifeTimeMembersAchieved,
        RegularMembersTarget: req.body.RegularMembersTarget,
        RegularMembersAchieved: req.body.RegularMembersAchieved,
        RestorationOfDefaultersTarget: req.body.RestorationOfDefaultersTarget,
        RestorationOfDefaultersAchieved: req.body.RestorationOfDefaultersAchieved,
        MembershipAmountTarget: req.body.MembershipAmountTarget,
        MembershipAmountAchieved: req.body.MembershipAmountAchieved,
        NewUcsTarget: req.body.NewUcsTarget,
        NewUcsAchieved: req.body.NewUcsAchieved,
        NewUnitTarget: req.body.NewUnitTarget,
        NewUnitAchieved: req.body.NewUnitAchieved,
        MonthlyQuranCircleTarget: req.body.MonthlyQuranCircleTarget,
        MonthlyQuranCircleAchieved: req.body.MonthlyQuranCircleAchieved,
        MonthlyDaroodCircleTarget: req.body.MonthlyDaroodCircleTarget,
        MonthlyDaroodCircleAchieved: req.body.MonthlyDaroodCircleAchieved,
        MonthlyMeeting: req.body.MonthlyMeeting,
        TrainingSession: req.body.TrainingSession
    }
    const options = {
        new: true
    }
    Monthlyreport.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateReport