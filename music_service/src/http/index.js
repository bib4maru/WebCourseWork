import axios from "axios";
export const Audio_URL = "http://localhost:5500/media/Audio/";
export const Image_URL = "http://localhost:5500/media/Images/";
export const API_URL = "http://localhost:5500";

export const api = axios.create({
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})