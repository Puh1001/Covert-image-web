const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs");

cloudinary.config({ 
  cloud_name: 'dvomghpsu', 
  api_key: '811596912878975', 
  api_secret: '0FGctG9XOmUytL90vbSOT2W24gM' 
});


//hàm tải ảnh lên cloud
let imgURL;
async function uploadCloudinary(filePath, format){
    await cloudinary.uploader.upload(filePath, {format: format}).then(result => {
        imgURL = result.secure_url;
        console.log(`upload complete: ${imgURL}`);
        fs.unlink(filePath, (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log("delete image in output folder");
            }
        })
    })
    .catch(error => {
        console.log(error);
    });
}

module.exports = {
    uploadCloudinary,
}