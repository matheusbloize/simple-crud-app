require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/productRoute');

const app = express();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/products', router);

mongoose.connect(MONGODB_URL).then(() => {
  console.log('connected to mongodb');
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
