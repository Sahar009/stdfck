import axios from 'axios';

const API_URL = 'http://localhost:10000/api/v1/user/';

// Change Password
const changePassword = async (passwordData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.put(API_URL + 'change-password', passwordData, config);
  return response.data;
};

// Update Contact Info
const updateContactInfo = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.put(API_URL + 'update-contact', contactData, config);
  return response.data;
};

// Delete Account
const deleteAccount = async (password, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.delete(API_URL + 'delete-account', {
    ...config,
    data: { password }
  });
  return response.data;
};

// Upload Profile Image (Avatar or ID Card)
const uploadImage = async ({ type, formData }, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  };

  const response = await axios.post(
    API_URL + `upload/${type === 'avatar' ? 'avatar' : 'id-card'}`, 
    formData, 
    config
  );
  return response.data;
};

const settingsService = {
  changePassword,
  updateContactInfo,
  deleteAccount,
  uploadImage
};

export default settingsService; 