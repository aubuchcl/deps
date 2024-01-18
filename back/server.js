const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Fake Data from API' });
});

app.listen(port, () => {
  console.log(`Express API listening at http://localhost:${port}`);
});