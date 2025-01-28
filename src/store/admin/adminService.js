import axios from 'axios';

const API_URL = 'https://stdfckbackend.onrender.com/api/v1/admin/';

// Login admin
const loginAdmin = async (adminData) => {
  const response = await axios.post(API_URL + 'login', adminData);
  if (response.data.success) {
    localStorage.setItem('admin', JSON.stringify(response.data.data));
  }
  return response.data;
};

// Get pending approvals
const getPendingApprovals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + 'pending-approvals', config);
  return response.data;
};

// Approve user
const approveUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + `approve/${userId}`, {}, config);
  return response.data;
};

// Get all transactions
const getAllTransactions = async (params, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  const response = await axios.get(API_URL + 'transactions', config);

  return response.data;
};

// Get transaction stats
const getTransactionStats = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + 'transactions/stats', config);
 
  return response.data;
};

// Credit user
const creditUser = async (creditData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + 'transactions/admin-credit', creditData, config);
  return response.data;
};

// Get unverified IDs
const getUnverifiedIds = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + 'unverified-ids', config);
  return response.data;
};

// Verify user ID
const verifyUserId = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + `verify-id/${userId}`, {}, config);
  return response.data;
};

// Verify account
const verifyAccount = async (accountNumber, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`https://stdfckbackend.onrender.com/api/v1/user/verify-account/${accountNumber}`, config);
  return response.data;
};

// Get all users
const getAllUsers = async (params, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  const response = await axios.get(API_URL + 'users', config);
  return response.data;
};

// Get user by ID
const getUserById = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + `users/${userId}`, config);
  return response.data;
};

// Delete user
const deleteUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + `users/${userId}`, config);
  return response.data;
};

const adminService = {
  loginAdmin,
  getPendingApprovals,
  approveUser,
  getAllTransactions,
  getTransactionStats,
  creditUser,
  getUnverifiedIds,
  verifyUserId,
  verifyAccount,
  deleteUser,
  getAllUsers,
  getUserById,
};

export default adminService; 