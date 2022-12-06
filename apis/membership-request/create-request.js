const express = require('express')
const app = express()
const { requestModel } = require('../../schemas')

const CreateDept = app.post('/', (req, res) => {
    const dept = new requestModel({
        // id:req.body.id,
        name: req.body.name,
        fatherName: req.body.fatherName,
        husbandName: req.body.husbandName,
        gender: req.body.gender,
        dob: req.body.dob,
        educationalQualification: req.body.educationalQualification,
        nameOfEducationalInstitution: req.body.nameOfEducationalInstitution,
        profession: req.body.profession,
        designation: req.body.designation,
        postalAddress: req.body.postalAddress,
        unionCouncilNo: req.body.unionCouncilNo,
        provincialConstituencyNo: req.body.provincialConstituencyNo,
        tehsilPostalAddress: req.body.tehsilPostalAddress,
        districtPostalAddress: req.body.districtPostalAddress,
        phoneNoResidence: req.body.phoneNoResidence,
        PhoneNoOffice: req.body.PhoneNoOffice,
        phoneNoCell: req.body.phoneNoCell,
        email:req.body.email,
        permanentAddress: req.body.permanentAddress,
        tehsilPermanentAddress: req.body.tehsilPermanentAddress,
        districtPermanentAddress: req.body.districtPermanentAddress,
        IntroducedBy: req.body.IntroducedBy,
        MembershipNo: req.body.MembershipNo,
        IntroducersForum: req.body.IntroducersForum,
        MemorialRafaqatBy: req.body.MemorialRafaqatBy,
        ReligiousThoughtOfSchool: req.body.ReligiousThoughtOfSchool,
        NationalIdentityCardNo: req.body.NationalIdentityCardNo,
        AffiliationWithAnyOrganization: req.body.AffiliationWithAnyOrganization,
        OrganizationName: req.body.OrganizationName,
        Responsibility: req.body.Responsibility,
        DesiredMagzine: req.body.DesiredMagzine,
        BloodGroup: req.body.BloodGroup,
        DesiredForum:req.body.DesiredForum ,
        DesiredMembership: req.body.DesiredMembership,
        DateOfForm:req.body.DateOfForm,
        approvalStatus: req.body.approvalStatus
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