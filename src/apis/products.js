import { apiClient } from './axiosInstance';

export async function getProducts(params) {
  const response = await apiClient.get('/products/', { params });
  return response.data;
}

export async function getProduct(id) {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
}

export async function getComments(id) {
  const response = await apiClient.get(`/products/${id}/comments`, {
    params: {
      limit: 10,
      cursor: 0,
    },
  });
  return response.data;
}
