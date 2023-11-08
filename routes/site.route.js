const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');
const { upload, ConvertController } = require('../controllers/ConvertController.js');

router.get('/', siteController.index);
router.get('/dowload', siteController.download);
router.post('/uploads', upload.single('file'),ConvertController.uploadImage);


module.exports = router;
