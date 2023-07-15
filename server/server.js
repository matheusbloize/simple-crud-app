require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT

mongoose.connect(MONGODB_URL).then(() => {
  console.log('connected to mongodb');
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
