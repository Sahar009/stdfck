import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import transactionReducer from './transactions/transactionSlice';
import settingsReducer from './settings/settingsSlice';
import transferReducer from './transfer/transferSlice';
import adminReducer from './admin/adminSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
    transfer: transferReducer,
    settings: settingsReducer,
    admin: adminReducer,    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store; 