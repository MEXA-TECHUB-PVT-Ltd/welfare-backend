const express = require('express')
const app = express()
const { reportsModel, usersModel } = require('../../schemas')

const GetReportsOfSubordinates = app.get('/', (req, res) => {
    if (req.query.userType == 'District') {
        reportsModel.find({ userType: 'District', department: req.query.department ,ReportCategory:req.query.ReportCategory}, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send(result)
            }
        })
    } else if (req.query.userType == 'Province') {
        reportsModel.find({$or:[{userType:'District'},{userType:'Province'}],department:req.query.department,ReportCategory:req.query.ReportCategory}, function(err, user) 
        {
           if (err)
           {
               res.send(err);
           }
           res.json(user);
       
        });
    } else if (req.query.userType == 'UC') {
        reportsModel.find({$or:[{userType:'District'},{userType:'Province'},{userType:'UC'}],department:req.query.department,ReportCategory:req.query.ReportCategory}, function(err, user) 
        {
           if (err)
           {
               res.send(err);
           }
           res.json(user);
       
        });
    } else if (req.query.userType == 'Unit') {
        reportsModel.find({$or:[{userType:'Unit'},{userType:'District'},{userType:'Province'},{userType:'UC'}],department:req.query.department,ReportCategory:req.query.ReportCategory}, function(err, user) 
    {
       if (err)
       {
           res.send(err);
       }
       res.json(user);
   
    });
    } else {
        res.sendStatus(500)
    }
})
module.exports = GetReportsOfSubordinates