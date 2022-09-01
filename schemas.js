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
    image:String,
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
    DistrictArea:String,
    PPArea:String,
    UCArea:String,
    UnitArea:String,    
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
    department: String,
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
    UserRole:String,
    ReportCategory:String,
    location: String,
    date: Date,
    time: Date,
    images: [String],
})
const MonthlyreportSchema = mongoose.Schema({
    userId:String,
    userType: String,
    DistrictArea:String,
    PPArea:String,
    UCArea:String,
    UnitArea:String,
    AreaNumber:String,
    userName:String,
    LifeTimeMembersTarget:String,
    LifeTimeMembersAchieved:String,
    RegularMembersTarget:String,
    RegularMembersAchieved:String,
    RestorationOfDefaultersTarget:String,
    RestorationOfDefaultersAchieved:String,
    MembershipAmountTarget:String,
    MembershipAmountAchieved:String,
    NewUcsTarget:String,
    NewUcsAchieved:String,
    NewUnitTarget:String,
    NewUnitAchieved:String,
    MonthlyQuranCircleTarget:String,
    MonthlyQuranCircleAchieved:String,
    MonthlyDaroodCircleTarget:String,
    MonthlyDaroodCircleAchieved:String,
    MonthlyMeeting:String,
    TrainingSession:String,

})
const departmentSchema = mongoose.Schema({
    departmentName:String,
    departmentImg:String,
    deptDescription:String
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

const adminModel = mongoose.model('adminSchema', adminSchema, 'admin')
const usersModel = mongoose.model('userSchema', userSchema, 'users')
const reportsModel = mongoose.model('reportSchema', reportSchema, 'reports')
const departmentModel = mongoose.model('department', departmentSchema, 'department')
const Monthlyreport = mongoose.model('Monthlyreport', MonthlyreportSchema, 'Monthlyreport')
const library = mongoose.model('library', librarySchema, 'library')

const eventsModel = mongoose.model('eventSchema', eventSchema, 'events')

module.exports = {
    adminModel,
    usersModel,
    reportsModel,
    departmentModel,
    Monthlyreport,
    library,
    eventsModel,
}