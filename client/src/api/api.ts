import axios from 'axios';
import { Product, ProductPut } from '../models/ProductModel'
const API_URL = 'https://simple-crud-app-omip.onrender.com/api/products/';

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_URL}`)

  return response.data
}

const createProduct = async (productInformation: Product): Promise<Product> => {
  const response = await axios.post<Product>(`${API_URL}`, productInformation)

  return response.data
}

const updateProduct = async (productId: string, updatedInformation: ProductPut): Promise<Product> => {
  const response = await axios.put<Product>(`${API_URL}${productId}`, updatedInformation)

  return response.data
}

const deleteProduct = async (productId: string): Promise<Product> => {
  const response = await axios.delete<Product>(`${API_URL}${productId}`)

  return response.data
}

export const api = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
}