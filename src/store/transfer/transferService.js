import axios from 'axios';

const API_URL = 'https://stdfckbackend.onrender.com/api/v1/user/';

// Internal Transfer
const transferMoney = async (transferData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(API_URL + 'transfer', transferData, config);
  return response.data;
};

// External Transfer
const externalTransfer = async (transferData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(API_URL + 'external-transfer', transferData, config);
  return response.data;
};

// Verify Account
const verifyAccount = async (accountNumber, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.get(API_URL + `verify-account/${accountNumber}`, config);
  return response.data;
};

// Admin Credit User
const adminCredit = async (creditData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(API_URL + 'transactions/admin-credit', creditData, config);
  return response.data;
};

const getWalletBalance = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.get(API_URL + 'balance', config);
  return response.data;
};

const transferService = {
  transferMoney,
  externalTransfer,
  getWalletBalance,
  verifyAccount,
  adminCredit
};

export default transferService; 