require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');

const app = express();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/api/products', router);

app.use(errorMiddleware);

mongoose.connect(MONGODB_URL).then(() => {
  console.log('connected to mongodb');
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
