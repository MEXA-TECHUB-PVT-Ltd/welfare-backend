const PORT = 4000
const connection = require('./connection')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/file-uploads', express.static('file-uploads'))
app.use('/image-uploads', express.static('image-uploads'))
app.get('/', (req, res) => {
    res.send('Working')
})

// Common API End Points
app.use('/upload-file', require('./apis/upload-file'))
app.use('/upload-image-admin', require('./apis/upload-image-admin'))
app.use('/upload-image', require('./apis/upload-image'))
app.use('/upload-multiple-images', require('./apis/upload-multiple-images'))        // upload limit of 5 images
app.use('/email-otp', require('./apis/email-otp'))


// Libray API End Points
app.use('/add-file-in-library', require('./apis/library/add-file-in-library'))
app.use('/get-library-items', require('./apis/library/get-library-items'))
app.use('/remove-file-from-library', require('./apis/library/remove-file-from-library'))


// User API End Points
app.use('/create-user', require('./apis/users/create-user'))
app.use('/delete-user', require('./apis/users/delete-user'))
app.use('/get-all-users', require('./apis/users/get-all-users'))
app.use('/get-user', require('./apis/users/get-user'))
app.use('/get-users-by-department', require('./apis/users/get-users-by-department'))
app.use('/get-users-by-forum', require('./apis/users/get-users-by-forum'))
app.use('/get-users-by-role', require('./apis/users/get-users-by-role'))
app.use('/get-users-by-user-type', require('./apis/users/get-users-by-user-type'))
app.use('/login-user', require('./apis/users/login-user'))
app.use('/logout-user', require('./apis/users/logout-user'))
app.use('/update-password', require('./apis/users/update-password'))
app.use('/update-user', require('./apis/users/update-user'))

// Event API End Points
app.use('/create-event', require('./apis/events/create-event'))
app.use('/delete-event', require('./apis/events/delete-event'))
app.use('/get-event', require('./apis/events/get-event'))
app.use('/get-events-by-category', require('./apis/events/get-events-by-category'))
app.use('/get-events-by-date', require('./apis/events/get-events-by-date'))
app.use('/get-events-by-department', require('./apis/events/get-events-by-department'))
app.use('/update-event', require('./apis/events/update-event'))
app.use('/get-all-events', require('./apis/events/get-all-events'))


// Report API End Points
app.use('/create-report', require('./apis/reports/create-report'))
app.use('/delete-report', require('./apis/reports/delete-report'))
app.use('/get-report', require('./apis/reports/get-report'))
app.use('/get-reports-by-category', require('./apis/reports/get-reports-by-category'))
app.use('/get-reports-by-user', require('./apis/reports/get-reports-by-user'))
app.use('/get-reports-of-subordinates', require('./apis/reports/get-subordinates-reports'))
app.use('/update-report', require('./apis/reports/update-report'))
app.use('/get-all-report', require('./apis/reports/get-all-reports'))
app.use('/get-reportCategory-report', require('./apis/reports/get-report-by-reportCategory'))
app.use('/get-reportData-by-date', require('./apis/reports/get-report-by-date'))

//department api
app.use('/create-dept', require('./apis/events/create-dept'))
app.use('/get-all', require('./apis/events/get-all-depts'))
app.use('/delete-dept', require('./apis/events/delete-dept'))

//Monthly Report Api
app.use('/monthlyReport', require('./apis/monthlyReport/create'))
app.use('/monthlyReportDelete', require('./apis/monthlyReport/delete'))
app.use('/monthlyReportGetAll', require('./apis/monthlyReport/get-all'))
app.use('/monthlyReportGet', require('./apis/monthlyReport/get'))
app.use('/monthlyReportUpdate', require('./apis/monthlyReport/update'))
app.use('/get-report-by-date', require('./apis/monthlyReport/get-report-by-date'))
app.use('/get-report-by-userId', require('./apis/monthlyReport/get-monthly-report-by-userId'))
app.use('/get-report-between-two-dates', require('./apis/monthlyReport/Get-monthly-report-by-two-dates'))
app.use('/get-report-by-forum', require('./apis/monthlyReport/get-by-forum'))
app.use('/get-report-by-userType', require('./apis/monthlyReport/get-by-userType'))
app.use('/get-report-by-department', require('./apis/monthlyReport/get-by-department'))

app.use('/get-report-by-dept-usertype', require('./apis/monthlyReport/get-by-dept-usertype'))
app.use('/get-report-by-forum-dept', require('./apis/monthlyReport/get-by-forum-department'))
app.use('/get-report-by-forum-dept-usertype', require('./apis/monthlyReport/get-by-forum-dept-usertype'))
app.use('/get-report-by-forum-usertype', require('./apis/monthlyReport/get-by-forum-usertype'))




// Requests 
app.use('/create-request', require('./apis/membership-request/create-request'))
app.use('/get-all-requests', require('./apis/membership-request/get-all'))
app.use('/get-request', require('./apis/membership-request/get-request'))
app.use('/delete-request', require('./apis/membership-request/delete-request'))
app.use('/update-approval-status', require('./apis/membership-request/update-approval-status'))
app.use('/get-approved-requests', require('./apis/membership-request/get-approved-req'))
app.use('/get-unapproved-requests', require('./apis/membership-request/get-unapprove-req'))
// District 
app.use('/create-district', require('./apis/district/create'))
app.use('/get-district', require('./apis/district/get'))
app.use('/get-all-district', require('./apis/district/get-all'))
app.use('/update-district', require('./apis/district/update'))
app.use('/delete-district', require('./apis/district/delete'))
// PP 
app.use('/create-pp', require('./apis/pp/create'))
app.use('/get-pp', require('./apis/pp/get'))
app.use('/get-all-pp', require('./apis/pp/get-all'))
app.use('/update-pp', require('./apis/pp/update'))
app.use('/delete-pp', require('./apis/pp/delete'))
// UC 
app.use('/create-uc', require('./apis/uc/create'))
app.use('/get-uc', require('./apis/uc/get'))
app.use('/get-all-uc', require('./apis/uc/get-all'))
app.use('/update-uc', require('./apis/uc/update'))
app.use('/delete-uc', require('./apis/uc/delete'))
// Unit
app.use('/create-unit', require('./apis/unit/create'))
app.use('/get-unit', require('./apis/unit/get'))
app.use('/get-all-unit', require('./apis/unit/get-all'))
app.use('/update-unit', require('./apis/unit/update'))
app.use('/delete-unit', require('./apis/unit/delete'))






app.listen(PORT, () => {
    console.log('Server listening at', PORT)
})
