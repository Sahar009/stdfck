import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import transferService from './transferService';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  transaction: null
};

// Internal Transfer
export const transferMoney = createAsyncThunk(
  'transfer/internal',
  async (transferData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const response = await transferService.transferMoney(transferData, token);
      return response;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// External Transfer
export const externalTransfer = createAsyncThunk(
  'transfer/external',
  async (transferData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const response = await transferService.externalTransfer(transferData, token);
      return response;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.transaction = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Internal Transfer
      .addCase(transferMoney.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(transferMoney.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transaction = action.payload.data;
        state.message = 'Transfer successful';
      })
      .addCase(transferMoney.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // External Transfer
      .addCase(externalTransfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(externalTransfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transaction = action.payload.data;
        state.message = 'External transfer initiated successfully';
      })
      .addCase(externalTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = transferSlice.actions;
export default transferSlice.reducer; 