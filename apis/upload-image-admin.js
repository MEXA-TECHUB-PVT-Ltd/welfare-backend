const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()

const multerMiddleWareStorage = multer.diskStorage({
    destination: (req, res, callBack) => {
        callBack(null, 'image-uploads/')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
})
const fileFilter = (req, file, callBack) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        callBack(null, true)
    } else {
        callBack(null, false)
    }
}
const upload = multer({
    storage: multerMiddleWareStorage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter,
})

const UploadImageAdmin = app.post('/', upload.single('image'), (req, res) => {
    try {
        const imageUpload = req.file.path
        console.log(imageUpload)
        res.status(200).json(imageUpload)
    } catch (error) {
        res.send(error)
    }
})
module.exports = UploadImageAdmin
