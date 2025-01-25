import axios from 'axios';

const API_URL = 'http://localhost:10000/api/v1/user/';

// Get user from localStorage
const getStoredUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

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

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);
  if (response.data.success) {
    // Store the complete response data including the token
    localStorage.setItem('user', JSON.stringify({
      ...response.data.data,
      token: response.data.data.token // Make sure token is included
    }));
  }
  return response.data;
};

// Get user profile
const getUserProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    

    const response = await axios.get(API_URL + 'profile', config);
  
    
    if (response.data.success) {
      // Update stored user data while preserving the token
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const updatedUser = {
        ...currentUser,
        ...response.data.data,
        token: currentUser.token // Preserve the token
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    return response.data;
  } catch (error) {
    console.error('Profile fetch error in service:', error);
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
    }
    throw error;
  }
};

const authService = {
  register,
  login,
  getUserProfile,
};

export default authService;