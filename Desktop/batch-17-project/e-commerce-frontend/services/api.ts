import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
});

export const getProducts = () => api.get("/products");

export const getProductById = (id: string | number) =>
    api.get(`/products/${id}`);

export const searchProducts = (query: string) =>
    api.get(`/products/search?q=${query}`);