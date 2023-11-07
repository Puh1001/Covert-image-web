const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const route = require('./routes/index.route');

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname,"/")));

route(app);

app.listen(port, () => {
  console.log(`Web listen http://localhost:${port}`);
});
