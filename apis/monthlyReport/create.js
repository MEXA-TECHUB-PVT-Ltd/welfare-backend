const express = require('express')
const app = express()
const { Monthlyreport, usersModel } = require('../../schemas')

const CreateMReport = app.post('/', (req, res) => {
    const userId = req.body.userId;

    usersModel.findById(userId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const userType = result.userType;
            const userName = result.name;

            if (userType == 'District') {
            const DistrictArea = result.DistrictArea;

                const MonthlyReport = new Monthlyreport({
                    userId: req.body.userId,
                    userType: userType,
                    DistrictArea: DistrictArea,
                    userName:userName,
                    AreaNumber:req.body.AreaNumber,
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
                })
                MonthlyReport.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            } else if (userType == 'Province') {
            const DistrictArea = result.DistrictArea;
            const PPArea = result.PPArea;

                const MonthlyReport = new Monthlyreport({
                    userId: req.body.userId,
                    userType: userType,
                    DistrictArea: DistrictArea,
                    PPArea: PPArea,
                    userName:userName,
                    AreaNumber:req.body.AreaNumber,
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
                })
                MonthlyReport.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            } else if (userType == 'UC') {
                const DistrictArea = result.DistrictArea;
                const PPArea = result.PPArea;
                const UCArea = result.UCArea;

                const MonthlyReport = new Monthlyreport({
                    userId: req.body.userId,
                    userType: userType,
                    DistrictArea:DistrictArea,
                    PPArea: PPArea,
                    UCArea: UCArea,
                    userName:userName,
                    AreaNumber:req.body.AreaNumber,
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
                })
                MonthlyReport.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            } else if (userType == 'Unit') {
                const DistrictArea = result.DistrictArea;
                const PPArea = result.PPArea;
                const UCArea = result.UCArea;
                const UnitArea = result.UnitArea;

                const MonthlyReport = new Monthlyreport({
                    userId: req.body.userId,
                    userType: userType,
                    DistrictArea: DistrictArea,
                    PPArea:PPArea,
                    UCArea: UCArea,
                    UnitArea:UnitArea,
                    userName:userName,
                    AreaNumber:req.body.AreaNumber,
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
                })
                MonthlyReport.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            } else {
                res.send("No Valid userType")
            }


        }
    })

})
module.exports = CreateMReport