const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



app.use(cors());


app.get('/api/data', (req, res) => {
  res.json({ message: `Generate Random Number: ${generateRandomNumber(1,1000)}` });
});

app.listen(port, () => {
  console.log(`Express API listening at http://localhost:${port}`);
});