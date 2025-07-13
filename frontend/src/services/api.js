import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = {
    // Product endpoints
    getAllProducts: () => axios.get(`${API_BASE_URL}/products`),
    getProductById: (id) => axios.get(`${API_BASE_URL}/products/${id}`),
    createProduct: (product) => axios.post(`${API_BASE_URL}/products`, product),
    updateProduct: (id, product) => axios.put(`${API_BASE_URL}/products/${id}`, product),
    deleteProduct: (id) => axios.delete(`${API_BASE_URL}/products/${id}`),
    searchProducts: (name) => axios.get(`${API_BASE_URL}/products/search?name=${name}`),
    getProductsByCategory: (category) => axios.get(`${API_BASE_URL}/products/category/${category}`),
    getLowStockProducts: (threshold) => axios.get(`${API_BASE_URL}/products/low-stock?threshold=${threshold}`),
};

export default api;