const path = require('path');


class SiteController {

    index(req, res) {
        res.sendFile(path.join(__dirname, '..','HTML','index.html'));
    };
    download(req, res) {
        const file = path.join(__dirname, "..", 'output', `image.png`);
        res.download(file, (err) => {
            if (err) {
                // Xử lý lỗi ở đây
                console.log(err);
            } else {
                // Chuyển hướng người dùng trở lại trang chủ sau khi tải xuống
                res.sendFile(path.join(__dirname, '..','HTML','index.html'));
            }
        });
    };
        
    
    
}

module.exports = new SiteController;
