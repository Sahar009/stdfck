import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import transactionReducer from './transactions/transactionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store; 