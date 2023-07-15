require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/productModel');

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

app.use(express.json());

app.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.status(200).json(product);
});

app.post('/api/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json(product);
});

app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body);
  const updatedProduct = await Product.findById(id);
  res.status(200).json(updatedProduct);
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.status(200).json(product);
});

mongoose.connect(MONGODB_URL).then(() => {
  console.log('connected to mongodb');
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
