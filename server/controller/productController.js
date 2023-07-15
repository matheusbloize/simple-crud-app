const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body);
  const updatedProduct = await Product.findById(id);
  res.status(200).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
