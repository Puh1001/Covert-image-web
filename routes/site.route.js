const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');
const { upload, ConvertController } = require('../controllers/ConvertController.js');
const SiteController = require('../controllers/SiteController');

//router.use('/', siteController.index);
router.get('/', siteController.index);
router.post('/uploads', upload.single('file'),ConvertController.uploadImage);

module.exports = router;
