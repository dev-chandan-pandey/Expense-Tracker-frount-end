import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import transactionReducer from './transactionReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer
  },
});
