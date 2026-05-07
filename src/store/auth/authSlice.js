import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';


// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  pendingEmail: null
};

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
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

// Get user profile
export const getUserProfile = createAsyncThunk(
  'auth/profile',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.user?.token;
      
      if (!token) {
        throw new Error('No token found');
      }

      return await authService.getUserProfile(token);
    } catch (error) {
      console.error('GetUserProfile error:', error);
      // Return the exact error message from the backend
      return thunkAPI.rejectWithValue(
        error.message || 'Failed to fetch profile'
      );
    }
  }
);

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  // Remove user from localStorage
  localStorage.removeItem('user');
});

// Initiate Login
export const initiateLogin = createAsyncThunk(
  'auth/initiateLogin',
  async (userData, thunkAPI) => {
    try {
      return await authService.initiateLogin(userData);
    } catch (error) {
      // Return the exact error message from the backend
      const message = 
        (error.response?.data?.message) ||
        error.message ||
        'Login failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Verify OTP
export const verifyLoginOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (verificationData, thunkAPI) => {
    try {
      return await authService.verifyLoginOTP(verificationData);
    } catch (error) {
      const message = 
        (error.response?.data?.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Resend OTP
export const resendLoginOTP = createAsyncThunk(
  'auth/resendOTP',
  async (email, thunkAPI) => {
    try {
      return await authService.resendLoginOTP(email);
    } catch (error) {
      const message = 
        (error.response?.data?.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        // Merge the new data while preserving the token
        state.user = {
          ...state.user,
          ...action.payload.data,
          token: state.user.token
        };
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // Use the exact error message
        state.message = action.payload;
        if (action.payload === 'Not authorized' || 
            action.payload === 'jwt expired') {
          state.user = null;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = '';
      })
      .addCase(initiateLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(initiateLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pendingEmail = action.payload.data.email;
      })
      .addCase(initiateLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // Use the exact error message
        state.message = action.payload;
      })
      .addCase(verifyLoginOTP.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(verifyLoginOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.pendingEmail = null;
      })
      .addCase(verifyLoginOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(resendLoginOTP.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(resendLoginOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(resendLoginOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, clearUser } = authSlice.actions;
export default authSlice.reducer;