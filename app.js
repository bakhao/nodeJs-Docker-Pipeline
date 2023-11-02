const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Tuto for beginners in docker with nodeJs');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});