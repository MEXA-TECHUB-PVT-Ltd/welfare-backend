const express = require('express')
const app = express()
const { userUcGroupModel } = require('../../schemas')

const CreateUser = app.post('/', (req, res) => {
    const UcGroupUser = new userUcGroupModel({
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
    })
    UcGroupUser.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

})
module.exports = CreateUser