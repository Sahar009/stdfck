import axios from 'axios';

const API_URL = '/api';

// Register user
const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    
    if (response.data.success) {
      localStorage.setItem('user', JSON.stringify(response.data.data));
    }
    return response.data;
  } catch (error) {
    // Remove any existing user data if registration fails
    localStorage.removeItem('user');
    throw error;
  }
};

const authService = {
  register,
};

export default authService;