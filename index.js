const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is the DB!');
});

const port = process.env.PORT || 4444;
app.listen(port);