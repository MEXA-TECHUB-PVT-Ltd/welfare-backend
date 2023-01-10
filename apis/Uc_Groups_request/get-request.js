const express = require('express')
const app = express()
const { UcGroupsrequestModel } = require('../../schemas')

const GetEvent = app.get('/', (req, res) => {
    UcGroupsrequestModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate('DistrictArea').populate('PPArea').populate('UCArea').populate('UnitArea')
})
module.exports = GetEvent