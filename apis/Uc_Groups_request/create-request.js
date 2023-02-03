const express = require('express')
const app = express()
const { UcGroupsrequestModel } = require('../../schemas')

const CreateUcGroupReq = app.post('/', (req, res) => {
   
    const UcGroupReq = new UcGroupsrequestModel({
        userType: 'UC',
        DistrictArea: req.body.DistrictArea,
        PPArea: req.body.PPArea,
        UCArea: req.body.UCArea,
        "صد ر": {
            name: req.body.Sname,
            fatherName: req.body.SfatherName,
            educationalQualification: req.body.SeducationalQualification,
            RafaqatNo: req.body.SRafaqatNo,
            address: req.body.Saddress,
            profession: req.body.Sprofession,
            mobileWhatsapNo: req.body.SmobileWhatsapNo,
            email: req.body.Semail,
        },
        'ناظم': [
            {
                name: req.body.Nname,
                fatherName: req.body.NfatherName,
                educationalQualification: req.body.NeducationalQualification,
                RafaqatNo: req.body.NRafaqatNo,
                address: req.body.Naddress,
                profession: req.body.Nprofession,
                mobileWhatsapNo: req.body.NmobileWhatsapNo,
                email: req.body.Nemail
            }
        ],
        'ناظم دعوت': [{
            name: req.body.NDname,
            fatherName: req.body.NDfatherName,
            educationalQualification: req.body.NDeducationalQualification,
            RafaqatNo: req.body.NDRafaqatNo,
            address: req.body.NDaddress,
            profession: req.body.NDprofession,
            mobileWhatsapNo: req.body.NDmobileWhatsapNo,
            email: req.body.NDemail
        }],
        'ناظم تربیت': [
            {
                name: req.body.NTname,
                fatherName: req.body.NTfatherName,
                educationalQualification: req.body.NTeducationalQualification,
                RafaqatNo: req.body.NTRafaqatNo,
                address: req.body.NTaddress,
                profession: req.body.NTprofession,
                mobileWhatsapNo: req.body.NTmobileWhatsapNo,
                email: req.body.NTemail
            }
        ],
        'ناظم ممبرشپ': [
            {
                name: req.body.NMname,
                fatherName: req.body.NMfatherName,
                educationalQualification: req.body.NMeducationalQualification,
                RafaqatNo: req.body.NMRafaqatNo,
                address: req.body.NMaddress,
                profession: req.body.NMprofession,
                mobileWhatsapNo: req.body.NMmobileWhatsapNo,
                email: req.body.NMemail
            }
        ],
        'ناظم مالیات': [
            {
                name: req.body.NMAname,
                fatherName: req.body.NMAfatherName,
                educationalQualification: req.body.NMAeducationalQualification,
                RafaqatNo: req.body.NMARafaqatNo,
                address: req.body.NMAaddress,
                profession: req.body.NMAprofession,
                mobileWhatsapNo: req.body.NMAmobileWhatsapNo,
                email: req.body.NMAemail
            }
        ],
        'ناظم سوشل میڈیا': [{
            name: req.body.NSMname,
            fatherName: req.body.NSMfatherName,
            educationalQualification: req.body.NSMeducationalQualification,
            RafaqatNo: req.body.NSMRafaqatNo,
            address: req.body.NSMaddress,
            profession: req.body.NSMprofession,
            mobileWhatsapNo: req.body.NSMmobileWhatsapNo,
            email: req.body.NSMemail
        }],
        DateOfForm: req.body.DateOfForm,
        nameAndSignature: req.body.nameAndSignature,
        ApprovedStatus: false

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