const path = require('path');


class SiteController {
    
    index(req, res) {
        res.sendFile(path.join(__dirname, '../HTML/index.html'));
    };

}

module.exports = new SiteController;
