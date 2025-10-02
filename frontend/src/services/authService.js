import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; 
// 👆 Change localhost to your machine's IP (e.g. http://192.168.0.105:5000/api/auth) when testing on mobile

// Register new user
export const registerUser = async (name, email, password, role) => {
  try {
    const res = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
      role,
    });
    return res.data; // { token, user }
  } catch (error) {
    throw error.response?.data?.message || 'Registration failed';
  }
};

// Login existing user
export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return res.data; // { token, user }
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};
