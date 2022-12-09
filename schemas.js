const mongoose = require('mongoose')

const librarySchema = mongoose.Schema({
    path: String,
    name: String,
})

const adminSchema = mongoose.Schema({
    forums: [String],
    cities: [String],
    departments: [String],
    roles: [String],
    library: [librarySchema],
})

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    password: String,
    session: String,
    name: String,
    dob: Date,
    profession: String,
    city: String,
    userType: {
        type: String,
        enum: ['District', 'Province', 'UC', 'Unit']
    },
    DistrictArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'district'
    },
    PPArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pp'
    },
    UCArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'uc'
    },
    UnitArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit'
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Prefer Not To Specify']
    },
    forum: {
        type: String,
        enum: ['TMQ', 'PAT', 'MWL', 'MUC', 'MYL', 'MSM']
    },
    role: {
        type: String,
        enum: ['Executive Member', 'General Secretary', 'President']
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department'
    },
    // savedReportId: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'savedReport'
    // }],

})
// const savedReportSchema = mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'users'
//     },

// })

const reportSchema = mongoose.Schema({
    reportId: Number,
    title: String,
    reportBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema'
    },
    eventCategory: {
        type: String,
        enum: ['Public', 'Private']
    },
    department: String,
    userType: {
        type: String,
        enum: ['District', 'Province', 'UC', 'Unit']
    },
    description: String,
    UserRole: String,
    ReportCategory: String,
    location: String,
    date: Date,
    time: Date,
    images: [String],
})
const MonthlyreportSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema'
    },
    userType: String,
    forum:String,
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department'
    },
    DistrictArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'district'
    },
    PPArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pp'
    },
    UCArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'uc'
    },
    UnitArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit'
    },
    AreaNumber: String,
    userName: String,
    LifeTimeMembersTarget: String,
    LifeTimeMembersAchieved: String,
    RegularMembersTarget: String,
    RegularMembersAchieved: String,
    RestorationOfDefaultersTarget: String,
    RestorationOfDefaultersAchieved: String,
    MembershipAmountTarget: String,
    MembershipAmountAchieved: String,
    NewUcsTarget: String,
    NewUcsAchieved: String,
    NewUnitTarget: String,
    NewUnitAchieved: String,
    MonthlyQuranCircleTarget: String,
    MonthlyQuranCircleAchieved: String,
    MonthlyDaroodCircleTarget: String,
    MonthlyDaroodCircleAchieved: String,
    MonthlyMeeting: String,
    TrainingSession: String,
    created_date: Date

})
const ppSchema = mongoose.Schema({
    name: String,
})
const ucSchema = mongoose.Schema({
    name: String,
})
const unitSchema = mongoose.Schema({
    name: String,
})
const districtSchema = mongoose.Schema({
    name: String,
})
const departmentSchema = mongoose.Schema({
    departmentName: String,
    departmentImg: String,
    deptDescription: String
})
const eventSchema = mongoose.Schema({
    eventId: Number,
    images: [String],
    title: String,
    description: String,
    location: String,
    date: Date,
    time: Date,
    category: {
        type: String,
        enum: ['Public', 'Private']
    },
    // createdBy:Strin
    department: String
})
const requestSchema = mongoose.Schema({
    // image: String,
    // email: String,
    name: String,
    fatherName: String,
    husbandName: String,
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    dob: String,
    educationalQualification: String,
    nameOfEducationalInstitution: String,
    profession: String,
    designation: String,
    postalAddress: String,
    unionCouncilNo: String,
    provincialConstituencyNo: String,
    tehsilPostalAddress: String,
    districtPostalAddress: String,
    phoneNoResidence: String,
    PhoneNoOffice: String,
    phoneNoCell: String,
    email: String,
    permanentAddress: String,
    tehsilPermanentAddress: String,
    districtPermanentAddress: String,
    IntroducedBy: String,
    MembershipNo: String,
    IntroducersForum: {
        type: String,
        enum: ['TMQ', 'PAT', 'MWL', 'MUC', 'MYL', 'MSM']
    },
    MemorialRafaqatBy: String,
    ReligiousThoughtOfSchool: String,
    NationalIdentityCardNo: String,
    AffiliationWithAnyOrganization: {
        type: String,
        enum: ['Yes', 'No']
    },
    OrganizationName: String,
    Responsibility: String,
    DesiredMagzine:  {
        type: String,
        enum: ['Monthly Minhaj-ul-Quran', 'Monthly Dukhtran-e-Islam','Nothing']
    },
    BloodGroup: String,

    DesiredForum: {
        type: String,
        enum: ['TMQ', 'PAT', 'MWL', 'MUC', 'MYL', 'MSM']
    },
    DesiredMembership: {
        type: String,
        enum: ['Rafaqat with Mag',
            'Rafaqat without Mag',
            'Life Membership with Mag',
            'Life Membership without Mag',
            'Memorial Rafaqat']
    },
    DateOfForm:String,



    approvalStatus: Boolean
})

const adminModel = mongoose.model('adminSchema', adminSchema, 'admin')
const usersModel = mongoose.model('userSchema', userSchema, 'users')
const reportsModel = mongoose.model('reportSchema', reportSchema, 'reports')
const departmentModel = mongoose.model('department', departmentSchema, 'department')
const Monthlyreport = mongoose.model('Monthlyreport', MonthlyreportSchema, 'Monthlyreport')
const library = mongoose.model('library', librarySchema, 'library')

const eventsModel = mongoose.model('eventSchema', eventSchema, 'events')
const requestModel = mongoose.model('requestSchema', requestSchema, 'request')
const districtModel = mongoose.model('district', districtSchema, 'district')
const ppModel = mongoose.model('pp', ppSchema, 'pp')
const ucModel = mongoose.model('uc', ucSchema, 'uc')
const unitModel = mongoose.model('unit', unitSchema, 'unit')


module.exports = {
    adminModel,
    usersModel,
    reportsModel,
    departmentModel,
    Monthlyreport,
    library,
    eventsModel,
    requestModel,
    districtModel,
    ppModel,
    ucModel,
    unitModel
}