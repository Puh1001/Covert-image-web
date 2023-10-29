const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const route = require('./routes/index.route');

app.use(morgan('combined'));

// Sử dụng body-parser để phân tích dữ liệu từ form HTML
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(__dirname + "/"));

route(app);

app.listen(port, () => {
  console.log(`Web listen http://localhost:${port}`);
});
