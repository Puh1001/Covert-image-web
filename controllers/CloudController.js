const cloudinary = require("cloudinary").v2;
const sharp = require("sharp");
const { Rembg } = require("rembg-node");

const path = require("path");
const fs = require("fs");

cloudinary.config({ 
  cloud_name: 'dvomghpsu', 
  api_key: '811596912878975', 
  api_secret: '0FGctG9XOmUytL90vbSOT2W24gM' 
});

//hàm tải ảnh lên cloud
let imgURL;

// const imagePath = path.join(__dirname, "..", "output", "image.jpg");
async function uploadCloudinary(filePath, format){
    await cloudinary.uploader.upload(filePath, {format: format}).then(result => {
        imgURL = result.secure_url;
        console.log(`upload complete: ${imgURL}`);
    })
    .catch(error => {
        console.log(error);
    });
}
//hàm xóa ảnh sau khi user tải ảnh xong.
function deleteImage(filePath){
    fs.unlink(filePath, (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("delete image in folder");
        }
    })
}
//hàm remove background
async function removeBackground(filePath){
    const input = sharp(filePath);
    const rembg = new Rembg({
        logging:true,
    });
    const output = await rembg.remove(input);
    //ghi đè vào file ban đầu
    await output.webp().toFile(filePath);
}
//test function
// const testPath = path.join(__dirname, "rabbit.jpg");
// removeBackground(testPath);

//hàm lưu về đường dẫn tới file ảnh
let imgPath;
function setImgPath(filePath){
    imgPath = filePath;
}
//hàm trả về đường dẫn.
function getImgPath(){
    return imgPath;
}

module.exports = {
    uploadCloudinary,
    deleteImage,
    getImgPath,
    setImgPath,
    removeBackground,
}