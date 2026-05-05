import axios from 'axios';

// const API_URL = 'http://localhost:10000/api/v1/user/';
const API_URL = 'https://stdfckbackend-zr1u.onrender.com/api/v1/user/';

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
      timeout: 60000,
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log('Upload Progress:', percentCompleted + '%');
      }
    };

    // Log the actual data being sent (excluding sensitive data)
    console.log('FormData contents:');
    for (let pair of userData.entries()) {
      if (pair[0] !== 'password') {
        console.log(pair[0] + ': ' + pair[1]);
      }
    }

    // Only append avatar, remove idCard
    const formDataToSend = new FormData();
    for (let [key, value] of userData.entries()) {
      if (key !== 'idCard') {  // Skip idCard
        formDataToSend.append(key, value);
      }
    }

    const response = await axios.post(API_URL + 'register', formDataToSend, config);

    console.log('API Response:', response.data);
    return response.data;

  } catch (error) {
    console.error('Register API error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      statusText: error.response?.statusText,
    });

    if (error.code === 'ECONNABORTED') {
      throw new Error('Upload taking too long. Please try with a smaller image or check your connection.');
    }
    
    if (!error.response) {
      throw new Error('Network error. Please check your connection and try again.');
    }

    throw error.response?.data?.message || 
          error.message || 
          'Registration failed. Please try again.';
  }
};

// Initiate login
const initiateLogin = async (userData) => {
  try {
    const response = await axios.post(API_URL + 'login/initiate', userData);
    return response.data;
  } catch (error) {
    // Directly throw the backend error response
    throw error.response?.data || {
      success: false,
      message: error.message || 'Login failed'
    };
  }
};

// Verify OTP
const verifyLoginOTP = async (verificationData) => {
  try {
    const response = await axios.post(API_URL + 'login/verify-otp', verificationData);
    
    if (response.data.success) {
      localStorage.setItem('user', JSON.stringify(response.data.data));
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw new Error(error.response?.data?.message || 'OTP verification failed');
  }
};

// Resend OTP
const resendLoginOTP = async (email) => {
  try {
    const response = await axios.post(API_URL + 'login/resend-otp', { email });
    
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    if (error.response?.status === 429) {
      throw new Error(`${error.response.data.message}. Wait ${error.response.data.waitTime} seconds.`);
    }
    throw new Error(error.response?.data?.message || 'Failed to resend OTP');
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
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const updatedUser = {
        ...currentUser,
        ...response.data.data,
        token: currentUser.token
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    return response.data;
  } catch (error) {
    console.error('Profile fetch error in service:', error);
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
    }
    // Return the exact error message from the backend
    throw error.response?.data || {
      success: false,
      message: error.message || 'An error occurred while fetching profile'
    };
  }
};

const authService = {
  register,
  initiateLogin,
  verifyLoginOTP,
  resendLoginOTP,
  getUserProfile,
};

export default authService;