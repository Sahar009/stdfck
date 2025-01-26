import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import adminService from './adminService';

const admin = JSON.parse(localStorage.getItem('admin'));

const initialState = {
  admin: admin || null,
  pendingApprovals: [],
  transactions: [],
  transactionStats: null,
  unverifiedIds: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Login admin
export const loginAdmin = createAsyncThunk(
  'admin/login',
  async (adminData, thunkAPI) => {
    try {
      return await adminService.loginAdmin(adminData);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get pending approvals
export const getPendingApprovals = createAsyncThunk(
  'admin/getPendingApprovals',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.getPendingApprovals(token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Approve user
export const approveUser = createAsyncThunk(
  'admin/approveUser',
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.approveUser(userId, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all transactions
export const getAllTransactions = createAsyncThunk(
  'admin/getAllTransactions',
  async (params, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.getAllTransactions(params, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get transaction stats
export const getTransactionStats = createAsyncThunk(
  'admin/getTransactionStats',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.getTransactionStats(token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Credit user
export const creditUser = createAsyncThunk(
  'admin/creditUser',
  async (creditData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.creditUser(creditData, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get unverified IDs
export const getUnverifiedIds = createAsyncThunk(
  'admin/getUnverifiedIds',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.getUnverifiedIds(token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Verify user ID
export const verifyUserId = createAsyncThunk(
  'admin/verifyUserId',
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.verifyUserId(userId, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    logout: (state) => {
      localStorage.removeItem('admin');
      state.admin = null;
      state.pendingApprovals = [];
      state.transactions = [];
      state.transactionStats = null;
      state.unverifiedIds = [];
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload.data;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.admin = null;
      })
      // Get pending approvals cases
      .addCase(getPendingApprovals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPendingApprovals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pendingApprovals = action.payload.data;
      })
      .addCase(getPendingApprovals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Add other cases for remaining actions...
  },
});

export const { reset, logout } = adminSlice.actions;
export default adminSlice.reducer; 