const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan')

app.use(morgan('combined'));

app.use(express.json());

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/HTML/index.html");
});

app.listen(port, () => {
  console.log(`Server listen http://localhost:${port}`);
});
