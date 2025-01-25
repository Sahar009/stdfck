import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import transactionService from './transactionService';

const initialState = {
  transactions: [],
  stats: null,
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalTransactions: 0
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Get user transactions
export const getUserTransactions = createAsyncThunk(
  'transactions/getUserTransactions',
  async (params, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await transactionService.getUserTransactions(token, params);
    } catch (error) {
      const message = 
        (error.response && 
          error.response.data && 
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transactions = action.payload.data.transactions;
        state.stats = action.payload.data.stats;
        state.pagination = {
          currentPage: action.payload.data.currentPage,
          totalPages: action.payload.data.totalPages,
          totalTransactions: action.payload.data.totalTransactions
        };
      })
      .addCase(getUserTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = transactionSlice.actions;
export default transactionSlice.reducer;