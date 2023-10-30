const path = require('path');


class SiteController {

    index(req, res) {
        res.sendFile(path.join(__dirname, '..','HTML','index.html'));
    };
    download(req, res) {
        const file = path.join(__dirname, "..", 'output', `image.png`);
        res.download(file);
        res.sendFile(path.join(__dirname, '..','HTML','index.html'));
    };
}

module.exports = new SiteController;
