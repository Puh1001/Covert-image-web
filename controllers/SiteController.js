
class siteController {
    
    index(req, res) {
        res.sendFile(__dirname + '../HTML/index');
    };

}