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
console.log('Multer module required');

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
        // Đọc file ảnh từ đường dẫn tạm thời
        const tempPath = req.file.path;
        console.log(`Temp path: ${tempPath}`);

        // Lấy định dạng muốn chuyển từ form HTML
        const format = req.body.format;
        console.log(`Format to convert to: ${format}`);

        // Chuyển đổi ảnh sang định dạng mong muốn
        const image = await jimp.read(tempPath);

        // Ghi ảnh đã chuyển đổi vào một file mới
        const outputPath = 'output/' + req.file.filename + '.' + format;
        await image.writeAsync(outputPath);

        // Xóa file tạm thời
        // fs.unlinkSync(tempPath);
        console.log('Temp file deleted');

        // Tự động tải xuống hình ảnh đã chuyển đổi
        res.download(outputPath, req.file.filename + '.' + format, function (err) {
            if (!err) {
                console.log('Image downloaded successfully!');
            } else {
                console.log('Download error:', err);
            }
        });

    };

}

console.log('ConvertController class defined');

module.exports = { upload, ConvertController: new ConvertController };
console.log('Module exports defined');
