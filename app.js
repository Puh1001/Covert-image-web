const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome covert-image web');
});

app.listen(port, () => {
  console.log(`Server listen http://localhost:${port}`);
});
