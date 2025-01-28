import axios from 'axios';

const API_URL = 'https://stdfckbackend.onrender.com/api/v1/user/';

// Get user from localStorage
const getStoredUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Register user
const register = async (userData) => {
  try {
    console.log('Making register API call...');
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 60000, // Increase timeout to 60 seconds
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log('Upload Progress:', percentCompleted + '%');
      }
    };

    // Log the actual data being sent
    console.log('FormData contents:');
    for (let pair of userData.entries()) {
      if (pair[0] !== 'password') {
        console.log(pair[0] + ': ' + pair[1]);
      }
    }

    const response = await axios.post(API_URL + 'register', userData, config);

    console.log('API Response:', response.data);
    return response.data;

  } catch (error) {
    console.error('Register API error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      statusText: error.response?.statusText,
    });

    // Handle specific error cases
    if (error.code === 'ECONNABORTED') {
      throw new Error('Upload taking too long. Please try with smaller images or check your connection.');
    }
    
    if (!error.response) {
      throw new Error('Network error. Please check your connection and try again.');
    }

    // Throw the actual error message from the server if available
    throw error.response?.data?.message || 
          error.message || 
          'Registration failed. Please try again.';
  }
};

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + 'login', userData);
    
    if (response.data.success) {
      // Store user data only if login was successful
      localStorage.setItem('user', JSON.stringify(response.data.data));
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
    
  } catch (error) {
    if (error.response) {
      // Handle specific error cases from backend
      if (error.response.data.message.includes('pending approval')) {
        throw new Error('Account pending approval. Please wait for admin confirmation.');
      }
      throw new Error(error.response.data.message || 'Invalid credentials');
    } else if (error.request) {
      throw new Error('No response from server. Please try again later.');
    } else {
      throw new Error(error.message || 'Error setting up request. Please try again.');
    }
  }
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