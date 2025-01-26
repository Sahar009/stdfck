import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import settingsService from './settingsService';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
};

// Change Password
export const changePassword = createAsyncThunk(
  'settings/changePassword',
  async (passwordData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await settingsService.changePassword(passwordData, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Contact Info
export const updateContactInfo = createAsyncThunk(
  'settings/updateContact',
  async (contactData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await settingsService.updateContactInfo(contactData, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete Account
export const deleteAccount = createAsyncThunk(
  'settings/deleteAccount',
  async (password, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await settingsService.deleteAccount(password, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Upload Profile Image
export const uploadImage = createAsyncThunk(
  'settings/uploadImage',
  async (imageData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await settingsService.uploadImage(imageData, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Password updated successfully';
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Update Contact Info
      .addCase(updateContactInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateContactInfo.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Contact information updated successfully';
      })
      .addCase(updateContactInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Delete Account
      .addCase(deleteAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Account deleted successfully';
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Upload Image
      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImage.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Image uploaded successfully';
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = settingsSlice.actions;
export default settingsSlice.reducer; 