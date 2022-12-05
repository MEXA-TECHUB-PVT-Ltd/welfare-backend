const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const { usersModel } = require('../schemas')

const SendOtpEmail = app.post('/', (req, res) => {
    usersModel.findOne({ email: req.body.email }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                const otpCode = Math.floor(1000 + Math.random() * 9000)
                //                 const transporter = nodemailer.createTransport({
                //                     service: 'gmail',
                //                     auth: {
                //                         user: 'trakazaapp@gmail.com',
                //                         pass: 'trakazaapptrakazaapp'
                //                     }
                //                 })
                //                 const mailOptions = {
                //                     // from: 'trakazaapp@gmail.com',
                //                     to: req.body.email,
                //                     subject: `Welfare Organization App`,
                //                     text: `
                // ${otpCode} is your verification code for Welfare Organization App.

                // Thank you for choosing our platform.

                // Regards,
                // Welfare Organization
                //                             `,
                //                 }
                //                 transporter.sendMail(mailOptions, (error, info) => {
                //                     if (error) {
                //                         res.send(error)
                //                     } else {
                //                         if (info) {
                //                             res.send('' + otpCode)
                //                         }
                //                     }
                //                 })
                res.send(otpCode + '')
            } else {
                res.sendStatus(404)
            }
        }
    })
})

module.exports = SendOtpEmail