const path = require('path');
const { getImgPath, deleteImage } = require('../controllers/CloudController');

class SiteController {

    index(req, res) {
        res.sendFile(path.join(__dirname, '..','HTML','index.html'));
    };
    download(req, res) {
        // const file = path.join(__dirname, "..", 'output', `image.png`);
        const file = getImgPath();
        // Kiểm tra xem người dùng đã nhập hình ảnh hay chưa
        if (!file) {
            // Nếu không có hình ảnh, chuyển hướng hoặc xử lý khác tại đây
            res.sendFile(path.join(__dirname, '..','HTML','erro.html'));
            return;
        }

        res.download(file, (err) => {
            if (err) {
                // Xử lý lỗi ở đây
                console.log(err);
                res.get(path.join(__dirname, '..','HTML','erro.html'));
            } else {
                //xóa ảnh sau khi tải về
                deleteImage(file);
                // Chuyển hướng người dùng trở lại trang chủ sau khi tải xuống
                res.get(path.join(__dirname, '..','HTML','index.html'));
            }
        });
    };
}

module.exports = new SiteController;
