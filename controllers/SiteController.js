const path = require('path');


class SiteController {
    
    index(req, res) {
        console.log('======index route')
        res.sendFile(path.join(__dirname, '../HTML/index.html'));
    };

}

module.exports = new SiteController;
