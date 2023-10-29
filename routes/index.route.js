const siteRouter = require('./site.route');
const convertRouter = require('./convert.route');

function route(app) {
    app.use('/', siteRouter);
    app.use('/convert', convertRouter);
}

module.exports = route;
