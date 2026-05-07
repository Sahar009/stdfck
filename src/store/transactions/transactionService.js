import axios from 'axios';

const API_URL = 'https://newbackend.unityfinance.finance/api/v1/user/';

const getUserTransactions = async (token, params = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page: params.page || 1,
      limit: params.limit || 10,
      type: params.type,
      status: params.status,
      startDate: params.startDate,
      endDate: params.endDate
    }
  };

  const response = await axios.get(API_URL + 'transactions', config);
  return response.data;
};

const transactionService = {
  getUserTransactions,
};

export default transactionService; 