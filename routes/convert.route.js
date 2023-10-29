const express = require('express');
const router = express.Router();

const { upload, ConvertController } = require('../controllers/ConvertController.js');

//router.post('/upload', upload.single('fileUpload'), ConvertController.uploadImage);
//router.post('/upload', function (req, res, next) {
//    console.log('uploading..');
//});



module.exports = router;
