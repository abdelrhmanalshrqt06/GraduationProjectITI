import axios from 'axios';

const API_URL = 'https://api.escuelajs.co';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
};
