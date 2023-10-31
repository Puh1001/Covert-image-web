const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
console.log('Path module required');
const fs = require('fs');
console.log('FS module required');
const jimp = require('jimp');
console.log('Jimp module required');
const multer = require('multer');
const Jimp = require('jimp');
console.log('Multer module required');
const { uploadCloudinary, setImgPath } = require("../controllers/CloudController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cấu hình multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('Setting destination for multer');
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log('Setting filename for multer');
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

console.log('Multer storage configured');

const upload = multer({ storage: storage });
console.log('Upload configured');

class ConvertController {

    async uploadImage(req, res) {
        console.log('Upload image function called');

        // Lấy định dạng muốn chuyển từ form HTML
        const format = req.body.format;
        console.log(`Format to convert to: ${format}`);
        const quality = req.body.quality;
        console.log(`Format to convert to: ${quality}`);
        const width = req.body.width;
        const height = req.body.height;
        console.log(`width ${width} is of type ${typeof width} and height ${height} is of type ${typeof height}`);

        // Đọc file ảnh từ đường dẫn tạm thời
        const tempPath = req.file.path;
        console.log(`Temp path: ${tempPath}`);
        const outputPath = path.join(__dirname, "..", "output", `image.${format}`);
        Jimp.read(tempPath)
            .then((image) => {
                return image
                    .quality(parseInt(quality)) // set JPEG quality
                    .resize(parseInt(width), parseInt(height))
                    .write(outputPath); // save
            })
            .then(() => {
                setImgPath(outputPath);
                uploadCloudinary(outputPath, format);
            })
            .catch((err) => {
                console.error(err);
            });
        // Tự động tải xuống hình ảnh đã chuyển đổi
       
    };
}

console.log('ConvertController class defined');

module.exports = { upload, ConvertController: new ConvertController };
console.log('Module exports defined');
