import axios from 'axios';
import { Product } from '../models/ProductModel'
const API_URL = 'http://localhost:8000/api/products/';

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_URL}`)

  return response.data
}

export const api = {
  getProducts
}