const express = require('express')
const app = express()
const { UcGroupsrequestModel } = require('../../schemas')

const CreateUcGroupReq = app.post('/', (req, res) => {
    const UcGroupReq = new UcGroupsrequestModel({
        userType:'UC',
        DistrictArea:req.body.DistrictArea,
        PPArea:req.body.PPArea,
        UCArea:req.body.UCArea,
        name:req.body.name,
        fatherName:req.body.fatherName,
        educationalQualification:req.body.educationalQualification,
        RafaqatNo:req.body.RafaqatNo,
        address:req.body.address,
        profession:req.body.profession,
        mobileWhatsapNo:req.body.mobileWhatsapNo,
        email:req.body.email,
        GroupRoles:req.body.GroupRoles,
        DateOfForm:req.body.DateOfForm,
        nameAndSignature:req.body.nameAndSignature,
        ApprovedStatus:false

    })
    UcGroupReq.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateUcGroupReq