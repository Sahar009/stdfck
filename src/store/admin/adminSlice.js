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
  users: {
    list: [],
    totalPages: 0,
    currentPage: 1,
    totalUsers: 0
  },
  selectedUser: null,
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
// Verify account
export const verifyAccount = createAsyncThunk(
  'admin/verifyAccount',
  async (accountNumber, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.verifyAccount(accountNumber, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all users
export const getAllUsers = createAsyncThunk(
  'admin/getAllUsers',
  async (params, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.getAllUsers(params, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user by ID
export const getUserById = createAsyncThunk(
  'admin/getUserById',
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.getUserById(userId, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  'admin/deleteUser',
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.deleteUser(userId, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update user frozen status
export const updateFrozenStatus = createAsyncThunk(
  'admin/updateFrozenStatus',
  async ({ userId, isFrozen }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await adminService.updateFrozenStatus(userId, isFrozen, token);
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
    clearSelectedUser: (state) => {
      state.selectedUser = null;
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
      // Get all transactions cases
      .addCase(getAllTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload.data;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get transaction stats cases
      .addCase(getTransactionStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactionStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactionStats = action.payload.data;
      })
      .addCase(getTransactionStats.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get unverified IDs cases
      .addCase(getUnverifiedIds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUnverifiedIds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.unverifiedIds = action.payload.data;
      })
      .addCase(getUnverifiedIds.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Verify user ID cases
      .addCase(verifyUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Remove the verified user from unverifiedIds array
        state.unverifiedIds = state.unverifiedIds.filter(
          (user) => user._id !== action.payload.data.userId
        );
      })
      .addCase(verifyUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get all users cases
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.list = action.payload.data.users;
        state.users.totalPages = action.payload.data.totalPages;
        state.users.currentPage = action.payload.data.currentPage;
        state.users.totalUsers = action.payload.data.totalUsers;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get user by ID cases
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedUser = action.payload.data;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Delete user cases
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Remove the deleted user from the users list
        state.users.list = state.users.list.filter(
          (user) => user._id !== action.meta.arg
        );
        state.users.totalUsers -= 1;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Update user frozen status cases
      .addCase(updateFrozenStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Update the user in the list
        const updatedUser = action.payload.data;
        state.users.list = state.users.list.map(user => 
          user._id === updatedUser.userId 
            ? { ...user, isFrozen: updatedUser.isFrozen }
            : user
        );
      });
  },
});

export const { reset, logout, clearSelectedUser } = adminSlice.actions;
export default adminSlice.reducer; 