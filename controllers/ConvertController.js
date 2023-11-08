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
const notifier = require('node-notifier');
const sharp = require("sharp");
const { Rembg } = require("rembg-node");
const { uploadCloudinary, setImgPath } = require("../controllers/CloudController");
const { type } = require('os');

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
        const scale = req.body.scale;
        console.log(`width: ${width}, height: ${height}, scale: ${scale}`);

        const rotate = req.body.rotate;
        const flip = req.body.flip;
        console.log(`Rotate: ${rotate}, flip: ${flip}`);

        const trimWidth = req.body.trimWidth;
        const trimHeight = req.body.trimHeight;
        const trimPositionX = req.body.trimPositionX;
        const trimPositionY = req.body.trimPositionY;
        console.log(`Trim Width: ${trimWidth}, Trim Height: ${trimHeight}, Trim Position X: ${trimPositionX}, Trim Position Y: ${trimPositionY}`);

        const brightness = req.body.brightness;
        const contrast = req.body.contrast;
        const opacity = req.body.opacity;
        const greyscale = req.body.greyscale;
        const invert = req.body.invert;
        const blur = req.body.blur;
        console.log(`brightness: ${brightness}, type of invert ${typeof (invert)}, ${invert}, blur: ${blur}`);

        const sepia = req.body.sepia;
        const posterize = req.body.posterize;
        console.log(`sepia: ${sepia} and type of sepia: ${typeof (sepia)}, posterize: ${posterize}`);

        const rmb = req.body.rmb;

        let outputPath = path.join(__dirname, "..", "output", `image.${format}`);

        //nhận tên và thay đổi tên
        const rename = req.body.rename;
        if (rename !== undefined) {
            outputPath = path.join(__dirname, "..", "output", `${rename}.${format}`);
        }

        //hàm remove background
        async function removeBackground(filePath) {
            const input = sharp(filePath);
            const rembg = new Rembg({
                logging: true,
            });
            const output = await rembg.remove(input);
            //ghi đè vào file ban đầu
            await output.toFile(filePath);
            return jimp.read(filePath);
        }

        // Đọc file ảnh từ đường dẫn tạm thời
        const tempPath = req.file.path;
        console.log(`Temp path: ${tempPath}`);
        const filename = path.basename(tempPath);
        console.log(Jimp.read(tempPath));
        const imagePromise = (rmb !== undefined) ? removeBackground(path.join(__dirname, "..", "uploads", filename)) : Jimp.read(tempPath);
        imagePromise
            .then((image) => {
                image.quality(parseInt(quality));
                if (width !== undefined && height !== undefined) {
                    image.resize(parseInt(width), parseInt(height)); // resize image
                }
                if (scale !== undefined || scale === '1') {
                    image.scale(parseInt(scale));
                }
                if (flip !== undefined || flip !== 'no') {
                    switch (flip) {
                        case 'horizontal':
                            image.flip(true, false);
                            break;
                        case 'vertical':
                            image.flip(false, true);
                            break;
                        case 'mirror-vertical':
                            image.flip(false, true);
                            break;
                        case 'mirror-horizontal':
                            image.mirror(true, false);
                            break;
                    }
                }
                if (rotate !== undefined) {
                    image.rotate(parseInt(rotate, false));
                }
                if (trimWidth !== undefined && trimHeight !== undefined && trimPositionX !== undefined && trimPositionY !== undefined) {
                    image.crop(parseInt(trimPositionX), parseInt(trimPositionY), parseInt(trimWidth), parseInt(trimHeight));
                }
                if (brightness !== undefined && contrast !== undefined && opacity !== undefined && greyscale !== undefined && invert !== undefined && blur !== undefined) {
                    image.brightness(parseFloat(brightness));
                    image.contrast(parseFloat(contrast));
                    if (opacity !== '1') {
                        image.opacity(parseFloat(opacity));
                    }
                    if (greyscale === 'true') {
                        image.greyscale();
                    }
                    if (invert === 'true') {
                        image.invert();
                    }
                    if (blur !== '0') {
                        image.blur(parseInt(blur));
                    }
                }
                if (sepia !== undefined && posterize !== undefined) {
                    if (sepia === 'true') {
                        image.sepia();
                    }
                    if (posterize !== "") {
                        image.posterize(parseInt(posterize));
                    }
                }
                return image.write(outputPath); // save
            })
            .then(() => {
                setImgPath(outputPath);
                uploadCloudinary(outputPath, format);
            })
            .then(() => {
                // Hiển thị thông báo sau khi tất cả các tác vụ đã hoàn thành
                notifier.notify({
                    title: 'Covert',
                    message: 'Ảnh của cậu đã được covert thành công !!! (❁´◡`❁)'
                });
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
