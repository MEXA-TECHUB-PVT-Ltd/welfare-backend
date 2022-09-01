const express = require('express')
const app = express()
const { departmentModel } = require('../../schemas')

const CreateDept = app.post('/', (req, res) => {
    const dept = new departmentModel({
        departmentName: req.body.departmentName,
        departmentImg: req.body.departmentImg,
        deptDescription: req.body.deptDescription,


    })
    dept.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateDept