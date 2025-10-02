import axios from "axios";

const API = axios.create({
  baseURL: "http://10.0.2.2:5000/api", // For Android Emulator
  // use http://localhost:5000 for iOS simulator or web
});

// Add token automatically if available
API.interceptors.request.use((config) => {
  const token = global.authToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
