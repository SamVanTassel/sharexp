import { configureStore } from '@reduxjs/toolkit';
import companiesReducer  from '../features/companies/companiesSlice.js';
import authReducer from '../features/auth/authSlice.js';
import usersReducer from '../features/users/usersSlice.js';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    authReducer: authReducer,
    usersReducer: usersReducer
  }
});

export default store;