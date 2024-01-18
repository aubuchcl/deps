const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors(
  {
    origin: "https://app.dec.chrisaubuchon.com"
  }
));


app.get('/api/data', (req, res) => {
  res.json({ message: 'Fake Data from API' });
});

app.listen(port, () => {
  console.log(`Express API listening at http://localhost:${port}`);
});